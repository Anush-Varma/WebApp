<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserPassword implements Rule
{
    public function passes($attribute, $value)
    {
        $user = User::where("id", Auth::user()->id)->first();
        return $user->password == Hash::make($attribute);
    }

    public function message()
    {
        return 'The :attribute is incorrect';
    }
}