<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\Tags;

class HomePageController extends Controller
{
    public function index(Request $request){
        $limit = 10;
        $tags = $request->query("tags", []);

        $tags = is_array($tags) ? $tags : array($tags);

        $dbRequest = count($tags) <= 0 ? 
            Posts::with("tags") :
            $posts = Posts::whereHas('tags', function ($query) use($tags) {
                $query->whereIn('name', $tags);
            })->with("tags");
        
        $posts = $dbRequest->skip(0)->limit($limit)->get()->map(function($post) {
            return [
                "id" => $post->id,
                "title" => $post->title,
                "description" => $post->description,
                "tags" => $post->tags->pluck('name'),
            ];
        });

        $tags = Tags::all([
            "name"
        ]);

        return Inertia::render('Home', [
            'posts' => $posts,
            'tags' => $tags
        ]);
    }
}
