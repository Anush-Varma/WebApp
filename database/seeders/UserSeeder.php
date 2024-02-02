<?php

namespace Database\Seeders;
use App\Models\Posts;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->count(5)->create()->each(function ($user){
            $user->posts()->saveMany(Posts::factory()->count(10)->make());
        });
    }
}
