<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register','AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');

//? Change when changing front
// Route::get('products', 'ElectronicsController@index');
// Route::get('products/{id}', 'ElectronicsController@show');
// Route::get('products/{id}/images', 'ElectronicsController@getImages');

Route::get('electronics', 'ElectronicsController@index');
Route::post('electronics', 'ElectronicsController@store');
Route::get('electronics/{id}', 'ElectronicsController@show');
Route::get('electronics/{id}/images', 'ElectronicsController@getImages');
Route::put('electronics/{id}', 'ElectronicsController@update');
Route::delete('electronics/{id}', 'ElectronicsController@destroy');

Route::get('fashion', 'FashionController@index');
Route::post('fashion', 'FashionController@store');
Route::get('fashion/{id}', 'FashionController@show');
Route::get('fashion/{id}/images', 'FashionController@getImages');
Route::put('fashion/{id}', 'FashionController@update');
Route::delete('fashion/{id}', 'FashionController@destroy');

Route::get('mobile', 'MobileController@index');
Route::post('mobile', 'MobileController@store');
Route::get('mobile/{id}', 'MobileController@show');
Route::get('mobile/{id}/images', 'MobileController@getImages');
Route::put('mobile/{id}', 'MobileController@update');
Route::delete('mobile/{id}', 'MobileController@destroy');

Route::get('allitems', 'ItemController@index');
Route::post('searchByCatogory', 'ItemController@filterCat');

Route::get('getFeaturedElectronics', 'FeaturedController@getFeaturedElectronics');
Route::get('getFeaturedMobile', 'FeaturedController@getFeaturedMobile');
Route::get('getFeaturedFashion', 'FeaturedController@getFeaturedFashion');



Route::get('cart','CartController@index'); 
Route::post('cart','CartController@create');
Route::put('cart/{id}','CartController@update');

Route::get('search/{query}', 'SearchController@search');
Route::post('search', 'SearchController@searchByCatogory');

Route::middleware('auth:api')->group(function(){
   Route::get('user/{userid}/detail', "UserController@show"); 
});

