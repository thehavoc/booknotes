<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User as User;
use App\Book as Book;
use App\Note as Note;
use Auth;

class ApiController extends TestCase
{
	use DatabaseTransactions;
	
	/**
	 * The notes that are used by the tests
	 *
	 * @var App\Note
	 */ 
	protected $notes;

	/**
	 * The user that is used by the tests
	 *
	 * @var integer
	 */ 
	protected $user;

	/**
	 * Set up the dummy data
	 *
	 */ 
	public function setUp()
	{
		parent::setUp();    

		$this->user = factory(User::class)->create();

		$this->notes = factory(Note::class, 2)->create([
			'user_id' => $this->user->id
		]);

		Auth::login($this->user);
	}

	/**
	 * Test getting all notes of the user
	 *
	 * @return void
	 */
	public function testGetNotes()
	{
		$response = $this->json('GET', 'api/notes/');

		$response
			->assertSuccessful()
			->assertJson($this->notes->toArray());
	}

	/**
	 * Test adding a note
	 *
	 * @return void
	 */	
	public function testAddNote()
	{			
		$exmaple_note = [
			'book_id' => $this->notes->first()->book_id,
			'description' => $this->notes->first()->description
		];

		$response = $this->json('POST', 'api/addNote/', $exmaple_note);
		
		$new_note = json_decode($response->getContent());

		$response
			->assertSuccessful()
			->assertJson($exmaple_note);		
	}
}
