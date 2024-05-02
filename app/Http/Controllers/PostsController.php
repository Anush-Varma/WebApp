<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\PostsImage;
use App\Models\Tags;
use App\Services\S3Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function create(){
        return Inertia::render('CreatePost');
    }

    public function store(Request $request, S3Service $s3Service): RedirectResponse {
        $request->validate([
            'title' => 'required|string|min:1',
            'description' => 'required|string'
        ]);
        $post = Posts::create([
            'user_id' => Auth::user()->id,
            'title' => $request->title,
            'description' => $request->description
        ]);

        $tags = $request->tags;
        
        foreach($tags as $tag) {
            $tagNew = Tags::firstOrCreate([
                'name' => $tag
            ]);

            $post->tags()->attach($tagNew->id);
        }

        if($request->hasFile('image')){
            $image = $request->file('image');

            $imagePath = $s3Service->uploadImage($image);

            PostsImage::create([
                "posts_id"=>$post->id,
                "image"=>$imagePath,
            ]);
        }

        return redirect('/');
    }

    public function editPostStore(Request $request, $id, S3Service $s3Service) {
        $post = Posts::with(['tags', "image", "user"])->where("id", $id)->first();

        if($post->user->id != Auth::user()->id) {
            return redirect("/");
        }

        Posts::where("id", $id)->update([
            'title' => $request->title,
            'description' => $request->description
        ]);

        foreach($post->tags as $tag) {
            $tagId = Tags::where('name', $tag->name)->first()->id;

            $post->tags()->detach($tagId);
        }
        
        foreach($request->tags as $tag) {
            $tagNew = Tags::firstOrCreate([
                'name' => $tag
            ]);

            $post->tags()->attach($tagNew->id);
        }

        return redirect("/post/" . $id);
    }

    public function editPost(Request $request, $id, S3Service $s3Service) {
        $post = Posts::with(['tags', "image", "user"])->where("id", $id)->first();

        if($post->user->id != Auth::user()->id) {
            return redirect("/");
        }

        $imageUrl = is_null($post->image) ? 
            null :
            $s3Service->getImageUrl($post->image->image);

        return Inertia::render('EditPost', [
            "post" => [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
                "image" => $imageUrl,
            ]
        ]);
    }

    public function view(Request $request, $id, S3Service $s3Service) {
        $post = Posts::with(['tags', "comments.user", "image"])->where("id", $id)->first();

        

        $imageUrl = is_null($post->image) ? 
            null :
            $s3Service->getImageUrl($post->image->image);

        return Inertia::render('ViewPost', [
            "post" => [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
                "image" => $imageUrl,
                "isMe" => Auth::user() ? Auth::user()->id == $post->user_id : false,
                "comments" => $post->comments->map(function($comment) {
                    return [
                        "id" => $comment->id,
                        "description" => $comment->description,
                        "created_at" => $comment->created_at,
                        "user_name" => $comment->user->name
                    ];
                })
            ]
        ]);

    }


    public function getPosts(Request $request): JsonResponse{
        $limit = $request->query("limit");
        $skip = $request->query("skip");
        
        $posts = Posts::with('tags')->skip($skip)->limit($limit)->get()->map(function($post) {
            return [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
            ];
        });

        return JsonResponse::fromJsonString(
            json_encode([
                "posts" => $posts
            ])
        );
    }

    public function getMyPosts(Request $request): JsonResponse{
        $limit = $request->query("limit");
        $skip = $request->query("skip");
        
        $posts = Posts::with('tags')->where("user_id", Auth::user()->id)->skip($skip)->limit($limit)->get()->map(function($post) {
            return [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
            ];
        });

        return JsonResponse::fromJsonString(
            json_encode([
                "posts" => $posts
            ])
        );
    }
}
