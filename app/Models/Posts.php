<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;



    # each post can have many comments
    public function comments(){
        return $this->hasMany(Comments::class);
    }


    # each post can have many likes
    public function likes(){
        return $this->hasMany(Likes::class);
    }


    # each post belongs  to one user
    public function user() {
        return $this->belongsTo(User::class);
    }
}
