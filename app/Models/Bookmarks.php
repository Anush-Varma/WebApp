<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmarks extends Model
{
    use HasFactory;

    # each bookmark belongs to one post
    public function post(){
        return $this->belongsToMany(Posts::class);

    }

    # each bookmark can beleong to many users
    public function user(){
        return $this->belongsToMany(User::class);
        
    }


}
