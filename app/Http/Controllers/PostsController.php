<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\Tags;
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


}
