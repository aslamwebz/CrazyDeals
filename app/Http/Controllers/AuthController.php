<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    //? Generate a access token by user
    protected function generateAccessToken($user){
        $token = $user->createToken($user->email.'_'.npw());

        return $token->accessToken;
    }

    public function register(Request $request){
        $request->validate([
           'name' => 'required',
           'email' => 'required|email',
           'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }

    public function login(Request $request){
        $request->validate([
           'email' => 'required|email|exists:users,email',
           'password' => 'required' 
        ]);

        if(auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = auth::user();

            $token = $user->createToken($user->email.'_'.now());

            return response()->json(['token' => $token->accessToken]);
        } else{
            return response()->json('error');
        }
    }

    public function logout(){
        $user = auth::user()->token();
        return response()->json(auth::user()->token());

        // $user->revoke();

        // return response()->json('logged out');
    }
}

