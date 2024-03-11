<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Posts;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_id' => $this->faker->randomElement(Posts::pluck('id')),
            'user_id' => $this->faker->randomElement(User::pluck('id')),
            'title' => fake()->text(),
            'description' => fake()->text(),
        ];
    }
}
