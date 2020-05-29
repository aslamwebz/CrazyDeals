<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    Protected $fillable = [
        'user_id', 'cart'
    ];
}
