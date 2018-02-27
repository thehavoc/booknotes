<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Source::class, function (Faker $faker) {
    return [    	
        'title' => $faker->text,
        'url' => 'http://example.com',
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        }
    ];
});
