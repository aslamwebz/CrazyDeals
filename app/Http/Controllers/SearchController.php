<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Electronics;
use App\Mobile;
use App\Fashion;

class SearchController extends Controller
{
    public function search($query,$category){
      if($category === "all"){
        $elec = Electronics::where('name','LIKE','%'.$query.'%')->get();
        $mobile = Mobile::where('name','LIKE','%'.$query.'%')->get();
        $fashion = Fashion::where('name','LIKE','%'.$query.'%')->get();
        $data =array_merge($elec->toArray(),$mobile->toArray(), $fashion->toArray());
        return response()->json([
            'data'=>$data
        ]);
      } else {
        $fashionData = [];
        $elecData = [];
        $mobileData = [];
        
        if($category === "fashion"){
            $fashionData = Fashion::where('name','LIKE','%'.$query.'%')->get();
            $fashionData = $fashionData->toArray();
        }

        if($category === "electronics"){
            $elecData = Electronics::where('name','LIKE','%'.$query.'%')->get();
            $elecData = $elecData->toArray();
        }

        if($category === "mobile"){
            $mobileData = Mobile::where('name','LIKE','%'.$query.'%')->get();
            $mobileData = $mobileData->toArray();
        }


        $data = array_merge($elecData,$mobileData,$fashionData);
        return response()->json([
            'data'=>$data
        ]);
      }
    }

    public function searchByCatogory(Request $request){

        $fashion =$request->get('f');
        $elec=$request->get('e');
        $mobile=$request->get('m');
        $search=$request->get('search');
        
    }
}
