<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
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
	 * Get all notes of a user
	 *
	 * @param Request $request
	 * @return Collection
	 */	
	public function getNotes(Request $request) 
	{	        
		return Auth::user()->notes()->with('book')->get();    	
	}	

	/**
	 * Add a note to the database
	 *
	 * @param Request $request
	 * @return 
	 */	
	public function addNote(Request $request, Note $note) 
	{	
		$request['book_id'] = 29;
		$request['user_id'] = Auth::id();
		return $note->create($request->all());
	}	

}
