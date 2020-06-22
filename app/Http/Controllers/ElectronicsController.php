<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Electronics;

class ElectronicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $electronics = Electronics::paginate(10);;

        return response()->json([
            'electronics' => $electronics
        ]);
    }

    public function getImages($id)
    {
        $item = Electronics::find($id);
        $eimages = $item ->electronicsImage;
        return response()->json([
            'eimages' =>  $eimages
        ]);
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
             'quantity' => 'required',
             'price' => 'required',
             'discount' => 'required',
            'brand' => 'required',
            'model' => 'required',
            'condition' => 'required',
            'year' => 'required',
            'processor' => 'required',
            'speed' => 'required',
            'memory' => 'required',
            'screen' => 'required',
            'color' => 'required',
            'os' => 'required',
            'storage' => 'required',
            'image' => 'required',
         ]);

         $electronic = new Electronics($request->all());

         $image = $request->get('image');
         $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
         \Image::make($request->get('image'))->save(public_path('images/').$name);

        //  $imageName = time().'.'.request()->image->getClientOriginalExtension();

        //  request()->image->move(public_path(`images`), $imageName);
 
         $electronic->image = $name;
         $electronic->sold =1;

        $electronic->save();
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
        $product = Electronics::find($id);
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
            'quantity' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'sold' => 'required',
           'brand' => 'required',
           'model' => 'required',
           'condition' => 'required',
           'year' => 'required',
           'processor' => 'required',
           'speed' => 'required',
           'memory' => 'required',
           'screen' => 'required',
           'color' => 'required',
           'os' => 'required',
           'storage' => 'required',
           'image' => 'required',
        ]);

        $electronics = Electronics::find($id);

        $data = $request->productData;

        $electronics->update($data);

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

        $electronics = Electronics::find($id);

        $electronics->delete();

        return response()->json([
            'message' => 'success'
        ]);
    }
}
