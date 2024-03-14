<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts_tags', function (Blueprint $table) {
            $table->primary(['posts_id', 'tags_id']);
            $table->foreignId('posts_id');
            $table->foreignId('tags_id');
            $table->timestamps();

            $table->foreign('tags_id')->references('id')->on('tags')
                ->onDelete('cascade')->onUpdate('cascade');
            
            $table->foreign('posts_id')->references('id')->on('posts')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts_tags');
    }
};
