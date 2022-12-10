<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use phpDocumentor\Reflection\Element;

class userController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User;
        $email = $req->email;
        $data = DB::select("select  email from users where email=?", [$email]);
        if (!$data) {
            $user->username = $req->input('username');
            $user->email = $req->input('email');
            $user->password = $req->input('password');
            $user->token = sha1(time());
            $user->save();
            return $user;
        } else {
            return ["email already exists"];
        }
    }
    function feedback(Request $req)
    {

        $name= $req->name;
        $email = $req->email;
        $feedback = $req->feedback;
        $data = DB::insert("INSERT INTO feeedback (`name`, `email`, `feedback`) VALUES (?,?,?);",[$name,$email,$feedback]);
        if (!$data) {
            return ["Something went wrong"];
        }
        else{
            return ["done"];
        }



    }


    function login(Request $req)
    {
        $email = $req->email;
        $pass = $req->password;
        $data = DB::select("select username , email , password from users where email=? and password=?", [$email, $pass]);
        if (!$data) {
            return ["email or password doesn't matched"];
        }


        return $data;

    }

    function resume_b()
    {
        $type = "r";
        $pb = "b";
        $data = DB::select("select * from tamplates where type=? AND pb=?", [$type, $pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function resume_p()
    {
        $type = "r";
        $pb = "p";
        $data = DB::select("select * from tamplates where type=? AND pb=?", [$type, $pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function cv_b()
    {
        $type = "c";
        $pb = "b";
        $data = DB::select("select * from tamplates where type=? AND pb=?", [$type, $pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function cv_p()
    {
        $type = "c";
        $pb = "p";
        $data = DB::select("select * from tamplates where type=? AND pb=?", [$type, $pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }

    function rc()
    {

        $pb = "b";
        $data = DB::select("select * from tamplates where pb=?", [$pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function p_rc()
    {

        $data = DB::select("SELECT * FROM tamplates WHERE id in (5, 10, 6, 14);");
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }

    function view(Request $req)
    {
        $id1 = $req->id;
        $view1 = $req->view;

        $query = DB::update("UPDATE tamplates SET view = ? WHERE id =?;", [$view1, $id1]);

        if(!$query){
            return ["Something went wrong"];
        }
        else{
            return ["updated"];
        }
    }

    function mostview()
    {

        $data = DB::select("select * from tamplates where view=(select max(view) from tamplates);");
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function github()
    {

        $pb = "images/github.png";
        $data = DB::select("select * from tamplates where img=?", [$pb]);
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function all()
    {


        $data = DB::select("select * from tamplates");
        if (!$data) {
            return "Something went wrong";
        }

        return $data;

    }
    function check_pay(Request $req)
    {
        $email = $req->email;
        $img=$req->img;

        $data = DB::select("select $img from users where email=?", [$email]);
        if (!$data) {
            return ["something went wrong"];
        }
  return $data;


    }
    function put_p(Request $req)
    {
        $email = $req->email;
        $img = $req->img;

        $query = DB::update("UPDATE users SET $img=true WHERE email =?;", [$email]);

        if(!$query){
            return ["Something went wrong"];
        }
        else{
            return ["updated"];
        }

    }




}


