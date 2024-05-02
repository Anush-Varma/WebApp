<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
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
            $comment->commentsParent()->attach($parent->id);
        }

        return redirect()->back();
    }


    public function getCommentReplies(Request $request): JsonResponse{
        $id = $request->query("id");

        $parent = Comments::where("id", $id)->first();

        $children = $parent->commentsChildren()->get();


        return JsonResponse::fromJsonString(
            json_encode([
                "comments" => $children->map(function($comment) {
                    return [
                        "id" => $comment->id,
                        "description" => $comment->description,
                        "created_at" => $comment->created_at,
                        "user_name" => $comment->user->name
                    ];
                })
            ])
        );
    }


}
