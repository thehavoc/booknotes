<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'description', 'author', 'year', 'user_id'
	];	

    /**
     * Get the user that owns the book.
     *
     * @var string
     */	
	public function user(){
		return $this->belongsTo("User");
	}
}
