<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User as User;
use App\Source as Source;
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
	}

	/**
	 * Test getting all notes of the user
	 *
	 * @return void
	 */
	public function testGetNotes()
	{
		$response = $this->actingAs($this->user)->json('GET', 'api/notes/');

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
			'source_id' => $this->notes->first()->source_id,
			'content' => $this->notes->first()->content
		];

		$response = $this->actingAs($this->user)->json('POST', 'api/addNote/', $exmaple_note);
		
		$response
			->assertSuccessful()
			->assertJson($exmaple_note);
	}

	/**
	 * Test removing a note
	 *
	 * @return void
	 */	
	public function testRemoveNote() 
	{	
		$response = $this->actingAs($this->user)->json('DELETE', 'api/deleteNote/' . $this->notes->first()->id, $this->notes->first()->toArray());

		$response
			->assertSuccessful();
	}

	/**
	 * Test updating a note
	 *
	 * @return void
	 */	
	public function testUpdateNote() 
	{	
		$example_note = $this->notes->first()->toArray();

		$example_note['content'] = 'New content';

		$response = $this->actingAs($this->user)->json('PATCH', 'api/updateNote/' . $example_note['id'], $example_note);

		$response
			->assertSuccessful()
			->assertJson($example_note);	
	}	
}
