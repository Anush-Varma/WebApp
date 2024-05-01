<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Posts;
use App\Models\Comments;
use App\Models\Likes;
use App\Models\Bookmarks;
use App\Models\Tags;
use App\Models\Verified;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // generate 10 users and 3 posts for each user
        $users = User::factory()->count(10)->has(
            Posts::factory()->count(3)->hasAttached(

                // Attach 2 tags to each post 
                // many to many relationship
                Tags::factory()->count(2) 
            )
        )->create();


        // Generate 5 verified users to represent 
        // one to one relationship
        Verified::factory()->count(5)->create();
        

        //add 5 likes so that a user can only like a post once
        // one to many relationship
        $numOfLikes = 5;

        for ($i = 0; $i < $numOfLikes; $i++){
            $user = $users->random();
            $post = $user->posts->random();

            $likeExists = Likes::where('user_id', $user->id)->where('post_id', $post->id)->exists();

            if (!$likeExists){
                Likes::factory()->create([
                    'user_id' => $user->id,
                    'post_id' => $post->id,
                ]);
            }

        }

        // generate 3 random bookmarks for users on posts
        // one to many relationship
        $numOfBookmarks = 3;

        for ($i = 0; $i< $numOfBookmarks; $i++){
            $user = $users->random();
            $post = $user->posts->random();
            $bookmarkExists = Bookmarks::where('user_id', $user->id)->where('post_id', $post->id)->exists();

            if (!$bookmarkExists){
                Bookmarks::factory()->create([
                    'user_id' => $user->id,
                    'post_id' => $post->id,
                ]);
            }
            
        }

    }
}
