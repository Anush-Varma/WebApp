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
        Schema::create('comments_posts', function (Blueprint $table) {
            $table->primary(['posts_id', 'comments_id']);
            $table->foreignId('posts_id');
            $table->foreignId('comments_id');
            $table->timestamps();

            $table->foreign('posts_id')->references('id')->on('posts')
                ->onDelete('cascade')->onUpdate('cascade');
            
            $table->foreign('comments_id')->references('id')->on('comments')
                ->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::create('comments_comments', function (Blueprint $table) {
            $table->primary(['parent_id', 'child_id']);
            $table->foreignId('parent_id');
            $table->foreignId('child_id');
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('comments')
                ->onDelete('cascade')->onUpdate('cascade');
            
            $table->foreign('child_id')->references('id')->on('comments')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comment_relations_tables');
    }
};
