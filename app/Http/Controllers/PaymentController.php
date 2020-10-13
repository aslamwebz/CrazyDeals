<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
\Stripe\Stripe::setApiKey('sk_test_jZkVFiL3UiJBnTImkLRdnJA1');

class PaymentController extends Controller
{


// Token is created using Stripe Checkout or Elements!
// Get the payment token ID submitted by the form:


    public function payment(Request $request){

        $token = $request->token;
$charge = \Stripe\Charge::create([
  'amount' => $request->amount * 100,
  'currency' => 'eur',
  'description' => 'Example charge',
  'source' => $token,
]);
        return response($request, 200)
        ->header('Content-Type', 'text/plain');
    }
}
