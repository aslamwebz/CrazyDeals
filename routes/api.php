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

Route::get('products', 'ElectronicsController@index');
Route::get('products/{id}', 'ElectronicsController@show');
Route::get('products/{id}/images', 'ElectronicsController@getImages');

Route::get('cart','CartController@index');
Route::post('cart','CartController@create');
Route::put('cart/{id}','CartController@update');

Route::middleware('auth:api')->group(function(){
   Route::get('user/{userid}/detail', "UserController@show"); 
});

