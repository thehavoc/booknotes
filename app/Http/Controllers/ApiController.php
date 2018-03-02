<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use App\Source;
use Auth;
use Response;
use App\Http\Requests\UserRequest;
use App\Http\Requests\SaveNoteRequest;

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
		return Auth::user()->notes()->with('source')->get();
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
	public function deleteNote(UserRequest $request, Note $note) 
	{	
		return Response::json($note->delete());
	}

	/**
	 * Edit a note
	 *
	 * @param Request $request
	 * @param Note $note
	 * @return Collection
	 */	
	public function updateNote(SaveNoteRequest $request, Note $note) 
	{	
		$note->update($request->all());
		
		return $note;
	}

	/**
	 * Add a source
	 *
	 * @param Request $request
	 * @param Source $source
	 * @return Collection
	 */	
	public function addSource(Request $request, Source $source) 
	{	
		$request['user_id'] = Auth::id();

		return $source->create($request->all());
	}	

	/**
	 * Get sources
	 *
	 * @param Request $request
	 * @param Source $source
	 * @return Collection
	 */	
	public function getSources(Request $request, Source $source) 
	{	
		return Auth::user()->sources()->get();		
	}	
}
