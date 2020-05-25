<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Item;
use Faker\Generator as Faker;

$factory->define(Item::class, function (Faker $faker) {
    return [
            'itemName' => $faker->word,
            'itemDescription' => $faker->text,
            'itemPrice' =>  $faker->randomNumber($nbDigits = NULL, $strict = false) ,
            'itemFeatured' => "yes",
            'itemCondition' =>"new",
            'itemQuantity' => $faker->randomNumber($nbDigits = NULL, $strict = false) ,
            'itemSold' => $faker->randomNumber($nbDigits = NULL, $strict = false) ,
            'itemShipping' => "free",
            'itemSeller' => $faker->name,
    ];
});
