<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Electronics;
use App\Mobile;
use App\Fashion;

class SearchController extends Controller
{
    public function search($query){
        $elec = Electronics::where('name','LIKE','%'.$query.'%')->get();
        $mobile = Mobile::where('name','LIKE','%'.$query.'%')->get();
        $fashion = Fashion::where('name','LIKE','%'.$query.'%')->get();
        return response()->json([
            'query' => $query,
                'elec'=>$elec,
                'mobile'=>$mobile,
               ' fashion'=>$fashion
        ]);
    }

    public function searchByCatogory(Request $request){

        $fashion =$request->get('f');
        $elec=$request->get('e');
        $mobile=$request->get('m');
        $search=$request->get('search');
        $fashionData = "";
        $elecData = "";
        $mobileData = "";
        
        if($fashion){
            $fashionData = Fashion::where('name','LIKE','%'.$search.'%')->get();
        }

        if($elec){
            $elecData = Electronics::where('name','LIKE','%'.$search.'%')->get();
        }

        if($mobile){
            $mobileData = Mobile::where('name','LIKE','%'.$search.'%')->get();
        }


       return response()->json([
           'fashion' => $fashionData,
           'elec' => $elecData,
           'mobile' => $mobileData
       ]);
    }
}
