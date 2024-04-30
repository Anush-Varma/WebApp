<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Posts extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'user_id',
        'title',
        'tags',
        'description',
    ];

    # each post can have many comments
    public function comments(){
        return $this->hasMany(Comments::class);
    }


    # each post can have many likes
    public function likes(){
        return $this->hasMany(Likes::class);
    }


    # each post belongs to one user
    public function user() {
        return $this->belongsTo(User::class);
    }


    # each post can be bookmarked by multiple users
    public function bookmarks(){
        return $this->hasMany(Bookmarks::class);
    }

    # each post can have multiple tags
    # Many to many relationship
    public function tags(){
        return $this->belongsToMany(Tags::class);
    }
}
