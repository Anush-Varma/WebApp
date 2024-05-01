<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


// One to Many relationship between User and Posts
class Comments extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'description',
    ];
    
    # each comment belongs to one user 
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function commentsParent(){
        return $this->belongsToMany(Comments::class, "comments_comments", "parent_id", "child_id");
    }

    public function commentsChildren(){
        return $this->belongsToMany(Comments::class, "comments_comments", "child_id", "parent_id");
    }

    public function posts(){
        return $this->belongsToMany(Posts::class);
    }
}
