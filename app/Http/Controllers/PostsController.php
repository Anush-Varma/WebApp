<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function create(){
        return Inertia::render('CreatePost');
    }

    public function delete(){
        
    }

    public function edit(){
        
    }
}
