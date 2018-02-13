<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class ApiController extends Controller
{
	/*
	|--------------------------------------------------------------------------
	| API Controller
	|--------------------------------------------------------------------------
	|
	| This controller is responsible for providing, updating and delete data from the database.
	|
	*/	

	/**
	 * Get all notes of a user.
	 *
	 * @return Collection
	 */	
	public function getNotes(Request $request) 
	{	        
		return Auth::user()->notes()->get();    	
	}	
}
