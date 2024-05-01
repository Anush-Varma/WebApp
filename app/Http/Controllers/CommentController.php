<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Comments;
use App\Models\Posts;
use Auth;

class CommentController extends Controller
{
    public function store(Request $request): RedirectResponse {
        $request->validate([
            'id' => 'required|int',
            'type' => 'required|string',
            'description' => 'required|string'
        ]);

        $comment = Comments::create([
            'user_id' => Auth::user()->id,
            'description' => $request->description
        ]);

        if($request->type == "post") {
            $post = Posts::where("id", $request->id)->first();
            $comment->posts()->attach($post->id);
        } else {
            $parent = Comments::where("id", $request->id)->first();
            $comment->comments()->attach($parent->id);
        }

        return redirect('/post/' . $request->id);
    }
}
