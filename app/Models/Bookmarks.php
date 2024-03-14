<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//Many to Many relationship between Posts and Users
class Bookmarks extends Model
{
    use HasFactory;

    # each bookmark can have many posts
    public function post(){
        return $this->belongsTo(Posts::class);

    }

    # Each bookmark belongs to a single user
    public function user(){
        return $this->belongsTo(User::class);
    
    }

}
