<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class S3Service
{
    public function uploadImage($file)
    {
        $path = Storage::disk("s3")->putFile('images', $file, 'public');

        return $path;
    }

    public function getImageUrl($path)
    {
        return Storage::disk("s3")->url($path);
    }
}
