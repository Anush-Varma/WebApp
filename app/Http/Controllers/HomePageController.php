<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\Tags;

class HomePageController extends Controller
{
    public function index(){
        $posts = Posts::all([
            "title",
            "description",
        ]);

        $tags = Tags::all([
            "name"
        ]);

        return Inertia::render('Home', [
            'posts' => $posts,
            'tags' => $tags
        ]);
    }
}
