<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    /**
     * Get the user that owns the note.
     *
     * @var string
     */	
	public function user(){
		return $this->belongsTo("User");
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
