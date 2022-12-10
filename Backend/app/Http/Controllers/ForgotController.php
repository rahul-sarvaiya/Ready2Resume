<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotRequest;
use App\Http\Requests\ResetRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use function PHPUnit\Framework\assertDirectoryDoesNotExist;

class ForgotController extends Controller
{
    public function forgot(ForgotRequest $request)
    {
        $email=$request->input('email');

        if(User::where('email',$email)->doesntExist()){
            return response([
               'User doen\'t exists!'
            ],404);
        }

            $data = DB::select("select token from users where email=?", [$email]);


        $token = Str::random(10);

        try {

            DB::table('password_resets')->insert([
                'email'=>$email,
                'token'=>$token
            ]);

        Mail::send('Mails.forgot',['token'=>$token],function (Message $message) use($email){
             $message->to($email);
             $message->subject('Reset your password');
        });

            return response([
                'check your email!'
            ]);


        }
        catch (\Exception $exception){
            return response([
                'message'=>$exception->getMessage()
            ],400);
        }

    }

    public function reset(ResetRequest $request){
        $token = $request->input('token');
        if(!$passwordResets = DB::table('password_resets')->where('token',$token)->first()){
            return response([
                    'Invalid token!'
            ],400);
        }
        if (!$user = User::where('email',$passwordResets->email)->first()){
            return response([
                'message'=>'User doesn\'t exist'
            ],404);
        }
        $user->password=$request->input('password');
        $user->save();
        return response([
           'Success'
        ]);
    }
}
