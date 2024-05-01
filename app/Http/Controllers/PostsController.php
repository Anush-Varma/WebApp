<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\Tags;
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

    public function store(Request $request): RedirectResponse {
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


        return redirect('/');
    }

    public function view(Request $request, $id) {
        $post = Posts::with(['tags', "comments.user"])->where("id", $id)->first();

        return Inertia::render('ViewPost', [
            "post" => [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
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
