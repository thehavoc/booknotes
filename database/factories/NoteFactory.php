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

$factory->define(App\Note::class, function (Faker $faker) {
    return [
        'content' => $faker->text,
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'source_id' => function () {
            return factory(App\Source::class)->create()->id;
        }        
    ];
});
