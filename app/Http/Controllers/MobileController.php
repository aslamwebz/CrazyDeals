<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mobile;

class MobileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mobiles = Mobile::paginate(3);;

        return response()->json([
            'mobiles' => $mobiles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'brand' => 'required',
            'model' => 'required',
            'available' => 'required',
            'sold' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'processor' => 'required',
            'memory' => 'required',
            'storage' => 'required',
            'display' => 'required',
            'camera' => 'required',
            // 'featured' => 'required',
            'shipping' => 'required',
            'condition' => 'required',
            'color' => 'required',
            'year' => 'required',
            'os' => 'required',
            // 'user_id' => 'required',
            'image' => 'required',
         ]);

         $mobile = new Mobile($request->all());

         $image = $request->get('image');
         $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
         \Image::make($request->get('image'))->save(public_path('images/').$name);

        //  $imageName = time().'.'.request()->image->getClientOriginalExtension();

        //  request()->image->move(public_path(`images`), $imageName);
 
         $mobile->image = $name;
         $mobile->sold =1;

        $mobile->save();
         return response()->json([
             'message' =>    $name ,
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Mobile::find($id);
        return response()->json([
            'product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'brand' => 'required',
            'model' => 'required',
            'available' => 'required',
            'sold' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'processor' => 'required',
            'memory' => 'required',
            'storage' => 'required',
            'display' => 'required',
            'camera' => 'required',
            'featured' => 'required',
            'shipping' => 'required',
            'condition' => 'required',
            'color' => 'required',
            'year' => 'required',
            'os' => 'required',
            'user_id' => 'required',
            'image' => 'required',
        ]);

        $mobiles = Mobile::find($id);

        $data = $request->productData;

        $mobiles->update($data);

        return response()->json([
            'message' => 'Product Updated Successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mobile = Mobile::find($id);

        $mobile->delete();

        return response()->json([
            'message' => 'success'
        ]);
    }
}
