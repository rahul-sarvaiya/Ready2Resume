<?php

use App\Http\Controllers\ForgotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register',[userController::class,'register']);
Route::post('/feedback',[userController::class,'feedback']);
Route::post('/login',[userController::class,'login']);
Route::post('/forgot',[ForgotController::class,'forgot']);
Route::post('/reset',[ForgotController::class,'reset']);
Route::get('/resume_b',[userController::class,'resume_b']);
Route::get('/resume_p',[userController::class,'resume_p']);
Route::get('/cv_b',[userController::class,'cv_b']);
Route::get('/cv_p',[userController::class,'cv_p']);
Route::get('/rc',[userController::class,'rc']);
Route::get('/p_rc',[userController::class,'p_rc']);
Route::get('/all',[userController::class,'all']);
Route::put('/view',[userController::class,'view']);
Route::get('/mostview',[userController::class,'mostview']);
Route::get('/github',[userController::class,'github']);
Route::put('/put_p',[userController::class,'put_p']);
Route::post('/check_pay',[userController::class,'check_pay']);


