<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description', 'user_id', 'book_id',
    ];    

    /**
     * Get the user that owns the note.
     *
     * @var string
     */	
	public function user(){
		return $this->belongsTo("App\User");
	}	    

    /**
     * Get the book that owns the note.
     *
     * @var string
     */	
    public function book()
    {
        return $this->belongsTo('App\Book');
    }	

}
