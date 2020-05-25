<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function show(Request $request, $userid){
        $user = User::find($userid);

        if($user){
            return response()->json($user);
        }

        return response()->json(['message' => 'user not found!'], 404);

    }
}
