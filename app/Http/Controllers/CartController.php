<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;

class CartController extends Controller
{
    public function index(){
        $cart = Cart::find(1);
        return response()->json(['cart' => $cart->cart]);
    }

    public function create(Request $request){
        $cart = json_encode([]);

       Cart::create([
           'user_id' => 1,
           'cart' => $cart,
       ]);

        return response()->json(['message' => 'Cart Created']);
    }

    public function update($id, Request $request){
        $cart = Cart::find($id);
    

       return response()->json(['message' => $cart, 'request' => $request->all()]);
    }
}
