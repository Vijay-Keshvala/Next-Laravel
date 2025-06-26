<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth()->user()->id;

        $products = Products::where("user_id",$user_id)->get();

        return response()->json([
            "status" =>true,
            "products" => $products,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $data = $request->validate([
            "title"=>"required",
        ]);

        $data["user_id"] = auth()->user()->id;

        if($request->hash_file("banner_img")){
            $data ["banner_img"] = $request->file("banner_img")->store("products","public");
        }

        Products::create($data);

        return response()->json([
            "status" =>true,
            "message" =>"Product created successfully",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
