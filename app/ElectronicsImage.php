<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ElectronicsImage extends Model
{

    protected $fillable = [
        'item_id', 'image_name'
    ];


    public function electronics(){
        return $this->belongsTo('App\Electronics');
    }
}
