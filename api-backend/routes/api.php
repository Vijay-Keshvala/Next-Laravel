<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post("register",[AuthController::class,"register"]);
Route::post("login",[AuthController::class,"login"]);


Route::group([
    'middleware' =>["auth:sanctum"]
],function(){
    Route::get("profile",[AuthController::class,"profile"]);
    Route::get("logout",[AuthController::class,"logout"]);


    Route::apiResource("products",ProductController::class);

});



// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
