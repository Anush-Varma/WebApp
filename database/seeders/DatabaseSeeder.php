<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Factories\CommentsFactory;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Posts;
use App\Models\Comments;
use App\Models\Likes;
use App\Models\Bookmarks;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        // generate 3 users and 3 posts for each users
        $users = User::factory()->count(10)->
            has(Posts::factory()->count(3))->create();
    


        //generate random comments for random posts and users
        Comments::factory()->count(5)->create([
            'user_id' => $users->random()->id,
            'post_id' => Posts::all()->random()->id,
        ]);

        //add 5 likes so that a user can only like a post once 

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

        //generate 3 random bookmarks for users on posts
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
