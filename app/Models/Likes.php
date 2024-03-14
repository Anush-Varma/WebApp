<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    use HasFactory;


    /**
     * One to many relationship between posts and likes.  
     * A like belongs to one Post
     * */  
    public function post(){
        return $this->belongsTo(Posts::class);
    }

    /**
     * One to many relationship between User and likes.  
     * A like belongs to one user
     * */ 
    public function user(){
        return $this->belongsTo(User::class);
    }

}
