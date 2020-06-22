<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Electronics;
use App\Mobile;
use App\Fashion;

class ItemController extends Controller
{
    public function index(){
        $datae = Electronics::orderBy('created_at', 'desc')->get();
        $datam = Mobile::orderBy('created_at', 'desc')->get();
        $dataf = Fashion::orderBy('created_at', 'desc')->get();

        $data =array_merge($datae->toArray(),$datam->toArray(), $dataf->toArray());
       return response()->json([
        'data'=> $data
       ]);
    }

    public function filterCat(Request $request){
        $cat = $request->get('cat');
        $fashion =$cat['fashion'];
        $elec=$cat['elec'];
        $mobile=$cat['mobile'];
        $fashionData = [];
        $elecData = [];
        $mobileData = [];
        
        if($fashion){
            $fashionData  = Electronics::orderBy('created_at', 'desc')->get()->toArray();
        }

        if($elec){
            $elecData = Mobile::orderBy('created_at', 'desc')->get()->toArray();
        }

        if($mobile){
            $mobileData = Fashion::orderBy('created_at', 'desc')->get()->toArray();
        }


        $data =array_merge($elecData,$mobileData, $fashionData);
        return response()->json([
         'data'=>   $data 
        ]);
    }
}
