<?php


use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use App\Services\S3Service;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


app()->singleton(S3Service::class, function ($app){
    return new S3Service();
});

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomePageController::class, 'index'])->name('home');
Route::get('/post/{id}', [PostsController::class, 'view'])->name('post.view');
Route::get('/post/{id}/edit', [PostsController::class, 'editPost'])->name('post.edit');
Route::post('/post/{id}/edit', [PostsController::class, 'editPostStore'])->name('post.editstore');


Route::get('/api/posts', [PostsController::class, 'getPosts'])->name('api.posts');
Route::get('/api/me/posts', [PostsController::class, 'getMyPosts'])->name('api.me.posts');
Route::get('/api/comments/replies', [CommentController::class, 'getCommentReplies'])->name('comments.replies');

Route::middleware('auth')->group(function () {
    Route::post('/create', [PostsController::class, 'store'])->name('post.store');
    Route::get('/create', [PostsController::class, 'create'])->name('post.create');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.updatepassword');
    
    Route::post('/comment/create', [CommentController::class, 'store'])->name('comment.store');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
