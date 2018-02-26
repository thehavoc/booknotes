<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use Auth;
use Response;

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
	 * Add a note
	 *
	 * @param Request $request
	 * @param Note $note
	 * @return Collection
	 */	
	public function addNote(Request $request, Note $note) 
	{	
		if(empty($request['book_id'])) {
			$request['book_id'] = 29;
		}
		
		$request['user_id'] = Auth::id();

		return $note->create($request->all());
	}	

	/**
	 * Remove a note 
	 *
	 * @param Request $request
	 * @param Note $note
	 * @return boolean
	 */	
	public function deleteNote(Request $request, Note $note) 
	{	
		if(Auth::id() !== $note->user_id) {
			return false;
		}

		return Response::json($note->delete());
	}

	/**
	 * Edit a note
	 *
	 * @param Request $request
	 * @param Note $note
	 * @return Collection
	 */	
	public function updateTask(Request $request, Note $note) 
	{	
		if(Auth::id() !== $note->user_id) {
			return false;
		}

		$note->update($request->all());
		return $note;
	}	
}
