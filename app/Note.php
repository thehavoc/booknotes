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
        'content', 'user_id', 'source_id',
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
     * Get the source that owns the note.
     *
     * @var string
     */	
    public function source()
    {
        return $this->belongsTo('App\Source');
    }	

}
