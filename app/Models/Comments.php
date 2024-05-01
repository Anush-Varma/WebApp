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

    public function comments(){
        return $this->belongsToMany(Comments::class);
    }

    public function posts(){
        return $this->belongsToMany(Posts::class);
    }
}
