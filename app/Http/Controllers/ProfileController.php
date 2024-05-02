<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Posts;
use App\Models\Tags;
use App\Models\User;
use App\Rules\UserPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $limit = 10;

        $posts = Posts::with('tags')->where("user_id", Auth::user()->id)->skip(0)->limit($limit)->get()->map(function($post) {
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

        $userEmail = Auth::user()->email;
        $userName = Auth::user()->name;

        
        return Inertia::render('Profile', [
            'email' => $userEmail,
            'name' => $userName,
            'posts' => $posts,
            'tags' => $tags,
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function updatePassword(Request $request): RedirectResponse
    {
        $request->validate([
            'oldPassword' => ['required', new UserPassword(Auth::user()->id)],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        User::where("id", Auth::user()->id)->update([
            'password' => Hash::make($request->password),
        ]);

        return Redirect::to('/profile');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        ]);

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::to('/profile');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // $request->validate([
        //     'password' => ['required', 'current_password'],
        // ]);

        // $user = $request->user();

        // Auth::logout();

        // $user->delete();

        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return Redirect::to('/');
    }
}
