<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use App\User as User;
use App\Book as Book;
use App\Note as Note;
use Auth;

class ApiController extends TestCase
{
	/**
	 * The notes that are used by the tests
	 *
	 * @var App\Task
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
			->assertStatus(200)
			->assertJson($this->notes->toArray());
	}

	/**
	 * Test adding a note
	 *
	 * @return void
	 */	
	public function testAddNote()
	{			
		$response = $this->json('POST', 'api/addNote', (array) $this->notes[0]);

		$new_task = json_decode($response->getContent());

		$response
			->assertStatus(200)
			->assertJson($this->notes[0]);		
	}
}
