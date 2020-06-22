<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Electronics;
use App\Mobile;
use App\Fashion;

class FeaturedController extends Controller
{

    public function getFeaturedElectronics(){
       $datae = Electronics::orderBy('created_at', 'desc')->limit(5)->get();
       return response()->json([
        'data'=> $datae
       ]);
    }

    public function getFeaturedMobile(){
        $datam = Mobile::orderBy('created_at', 'desc')->limit(5)->get();
        return response()->json([
            'data'=> $datam
           ]);
    }

    public function getFeaturedFashion(){
        $dataf = Fashion::orderBy('created_at', 'desc')->limit(5)->get();
        return response()->json([
            'data'=> $dataf
           ]);
    }


    
}
