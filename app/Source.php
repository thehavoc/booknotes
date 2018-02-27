<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'title', 'url', 'user_id'
	];	

    /**
     * Get the user that owns the source.
     *
     * @var string
     */	
	public function user(){
		return $this->belongsTo("User");
	}
}
