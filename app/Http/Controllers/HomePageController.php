<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Posts;

class HomePageController extends Controller
{
    public function index(){
        $posts = Posts::all([
            "title",
            "description",
        ]);

        return Inertia::render('Home', [
            'posts' => $posts,
        ]);
    }
}
