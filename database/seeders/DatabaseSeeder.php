<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Factories\CommentsFactory;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Posts;
use App\Models\Comments;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        $users = User::factory()->count(3)->create();
        $posts = Posts::factory()->count(3)->create();

        $comments = Comments::factory()->count(4)->create([
            'user_id' => $users->random()->id,
            'post_id' => function () use ($posts) {
                return $posts->random()->id;
            },
        ]);
    }
}
