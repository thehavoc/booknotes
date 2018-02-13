<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
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
    public function setUp() {
        parent::setUp();    

        $this->user = factory(User::class)->make();

        $this->notes = factory(Note::class, 10)->make([
            'user_id' => $this->user->id
        ]);

        Auth::login($this->user);
    }    

    /**
     * Get all notes of the user.
     *
     * @return void
     */
    public function testGetNotes()
    {
        $response = $this->json('GET', 'api/notes/');

        $response
            ->assertStatus(200)
            ->assertJson([$this->notes->toArray()]);
    }
}
