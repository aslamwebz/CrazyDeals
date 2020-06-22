<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mobile extends Model
{
    protected $fillable = [
        'name' ,
    'brand' ,
    'model' ,
    'available' ,
    'sold' ,
    'price' ,
    'discount' ,
    'processor' ,
    'memory' ,
    'storage' ,
    'display' ,
    'camera' ,
    'featured' ,
    'shipping' ,
    'condition' ,
    'color' ,
    'year' ,
    'os' ,
    'user_id' ,
    'image' ,'category', 'sub_category'
    ];
}
