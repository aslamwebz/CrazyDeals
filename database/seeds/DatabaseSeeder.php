<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ItemSeeder::class);
        $this->call(ElectronicsSeeder::class);
        $this->call(ElectronicsImageSeeder::class);
        $this->call(FashionSeeder::class);
        $this->call(MobileSeeder::class);
    }
}
