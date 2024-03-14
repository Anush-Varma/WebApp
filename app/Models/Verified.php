<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verified extends Model
{
    use HasFactory;


    # A user can either be verified or not
    # one to one relationship
    public function verified(){
        return $this->belongsTo(User::class);
    }


}
