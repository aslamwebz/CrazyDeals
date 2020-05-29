<?php

use Illuminate\Database\Seeder;

class ElectronicsImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'a.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'b.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'c.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'd.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'e.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'f.jpg'
        ]);

        DB::table('electronics_images')->insert([
            'item_id' =>1,
             'image_name' => 'g.jpg'
        ]);
    }
}
