<?php
function updatePassword(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->validate([
            'oldPassword' => ['required', new UserPassword],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        User::where("id", Auth::user()->id)->update([
            'password' => Hash::make($request->password),
        ]);

        return Redirect::to('/profile');
    }