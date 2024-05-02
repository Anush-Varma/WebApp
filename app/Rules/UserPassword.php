<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserPassword implements Rule
{
    private $id;

    public function __construct($id) {
        $this->id = $id;
    }

    public function passes($attribute, $value)
    {
        $user = User::where("id", $this->id)->first();
        return Hash::check($value, $user->password);
    }

    public function message()
    {
        return 'The :attribute is incorrect';
    }
}