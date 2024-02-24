<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Posts::all();
        return view("posts.index", compact("posts"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title"=> "required|max:255",
            "content"=> "required",
        ]);
        Posts::create($request->all());
        return redirect()->route("posts.index")
            ->with("success","post created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Posts::find($id);
        return view("posts.show", compact("post"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "title"=> "required|max:255",
            "content"=> "required",
            ]);
        $post = Posts::find($id);
        $post->update($request->all());
        return redirect()->route("posts.index")
            ->with("success","Post updated successfully");
    }

    public function create()
    {
        return view("posts.create");
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Posts::find($id);
        $post->delete();
        return redirect()->route("posts.index")
            ->with("success","Post deleted successfully");
    }
}
