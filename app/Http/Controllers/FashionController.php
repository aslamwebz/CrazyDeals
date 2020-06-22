<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fashion;

class FashionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fashions = Fashion::paginate(3);;

        return response()->json([
            'fashions' => $fashions
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
            'available' => 'required',
            'sold' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'colors' => 'required',
            'sizes' => 'required',
            // 'featured' => 'required',
            'shipping' => 'required',
            'condition' => 'required',
            'department' => 'required',
            'image' => 'required',
            // 'user_id' => 'required',
         ]);

         $fashion = new Fashion($request->all());

         $image = $request->get('image');
         $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
         \Image::make($request->get('image'))->save(public_path('images/').$name);

        //  $imageName = time().'.'.request()->image->getClientOriginalExtension();

        //  request()->image->move(public_path(`images`), $imageName);
 
         $fashion->image = $name;
         $fashion->sold =1;

        $fashion->save();
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
        $product = Fashion::find($id);
        $product->sizes = \json_decode($product->sizes);
        $product->colors = \json_decode($product->colors);

        return response()->json([
            'product' => $product,
            ]);
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
            'available' => 'required',
            'sold' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'colors' => 'required',
            'sizes' => 'required',
            'featured' => 'required',
            'shipping' => 'required',
            'condition' => 'required',
            'department' => 'required',
            'image' => 'required',
            'user_id' => 'required',
        ]);

        $fashions = Fashion::find($id);

        $data = $request->productData;

        $fashions->update($data);

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
        $fashion = Fashion::find($id);

        $fashion->delete();

        return response()->json([
            'message' => 'success'
        ]);
    }
}
