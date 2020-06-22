<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fashion extends Model
{
    protected $fillable = [
        'name' ,
        'brand' ,
        'available' ,
        'sold' ,
        'price' ,
        'discount' ,
        'colors' ,
        'sizes' ,
        'featured' ,
        'shipping' ,
        'condition' ,
        'image' ,
        'user_id' ,'category', 'sub_category'
    ];
}
