<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verified extends Model
{
    use HasFactory;


    # A user can either be verified or not
    public function verified(){
        return $this->belongsTo(User::class);
    }


}
