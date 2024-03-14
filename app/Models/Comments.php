<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


// One to Many relationship between User and Posts
class Comments extends Model
{
    use HasFactory;

    
    # each comment belongs to one user 
    public function user(){
        return $this->belongsTo(User::class);
    }

    # each comment belongs to one post
    public function post(){
        return $this->belongsTo(Posts::class);
    }

}
