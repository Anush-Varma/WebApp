<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    use HasFactory;


    # each tag can belong to many different posts
    # many to many relationship
    public function posts(){
        return $this->belongsToMany(Posts::class);
    }
}
