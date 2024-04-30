<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\Tags;

class HomePageController extends Controller
{
    public function index(){
        

        $posts = Posts::with('tags')->get()->map(function($post) {
            return [
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
