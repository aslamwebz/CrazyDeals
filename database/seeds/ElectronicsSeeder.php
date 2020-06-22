<?php

use Illuminate\Database\Seeder;

class ElectronicsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('electronics')->insert([
            'name' => 'Apple MacBook Pro Retina Core i7 2.7GHz 16GB RAM 768GB SSD 15" - MD831LL/A', 
            'available' => '10', 
            'price' => '1700.99', 
            'discount' => '49', 
            'sold' => '10', 
            'brand' => 'Apple', 
            'model' => 'MacBook Pro', 
            'condition' => 'New', 
            'year' => '2012', 
            'processor' => 'Core i7', 
            'speed' => '2.7GHz', 
            'memory' => '16', 
            'screen' => '15', 
            'color' => 'Silver', 
            'os' => 'MacOs', 
            'storage' => '786',
            'storage_type' => 'ssd',
            'graphics' => 'RTX 2060 Max',
            'image' => 'macpro1.jpg',
            'category' => "electronics",
            'sub_category' => "laptop",
        ]);

        DB::table('electronics')->insert([
            'name' => 'Dell XPS 13 7390, (13.4") Touch, Core i7-1065G7, 16GB, 512GB SSD, W10Pro - KH8PV', 
            'available' => '10', 
            'price' => '1790.99', 
            'discount' => '49', 
            'sold' => '10', 
            'brand' => 'Dell', 
            'model' => 'XPS 13', 
            'condition' => 'New', 
            'year' => '2020', 
            'processor' => 'Core i7', 
            'speed' => '2.7GHz', 
            'memory' => '16', 
            'screen' => '15', 
            'color' => 'Silver', 
            'os' => 'Windows', 
            'storage' => '512',
            'storage_type' => 'ssd',
            'graphics' => 'RTX 2060 Max',
            'image' => 'xps131.jpg',
            'category' => "electronics",
            'sub_category' => "laptop",
        ]);

        DB::table('electronics')->insert([
            'name' => 'Apple 13" MacBook Air 2020 1.1GHz 256GB SSD 16GB A2179 MVH22LL/A-BTO +A Grade', 
            'available' => '10', 
            'price' => '1149.99', 
            'discount' => '49', 
            'sold' => '10', 
            'brand' => 'Apple', 
            'model' => 'MacBook Air 2020', 
            'condition' => 'New', 
            'year' => '2020', 
            'processor' => 'Core i7', 
            'speed' => '2.7GHz', 
            'memory' => '16', 
            'screen' => '15', 
            'color' => 'Silver', 
            'os' => 'Windows', 
            'storage' => '512',
            'storage_type' => 'ssd',
            'graphics' => 'RTX 2060 Max',
            'image' => 'macair1.jpg',
            'category' => "electronics",
            'sub_category' => "laptop",
        ]);

        DB::table('electronics')->insert([
            'name' => 'ROG Zephyrus G14 14•White•HD Full•RTX 2060 Max-Q•W10•14 inches•16GB', 
            'available' => '10', 
            'price' => '1149.99', 
            'discount' => '49', 
            'sold' => '10', 
            'brand' => 'Asus', 
            'model' => 'ROG Zephyrus G14', 
            'condition' => 'New', 
            'year' => '2020', 
            'processor' => 'Core i7', 
            'speed' => '2.7GHz', 
            'memory' => '16', 
            'screen' => '17', 
            'color' => 'Silver', 
            'os' => 'Windows', 
            'storage' => '512',
            'storage_type' => 'ssd',
            'graphics' => 'RTX 2060 Max',
            'image' => 'asusrog1.jpg',
            'category' => "electronics",
            'sub_category' => "laptop",
        ]);

        DB::table('electronics')->insert([
            'name' => 'HP Elite Dragonfly 13,3"FHD | i7-8565U | 16GB | 1TB SSD | UHD630 | Win10Pro', 
            'available' => '10', 
            'price' => '1149.99', 
            'discount' => '49', 
            'sold' => '10', 
            'brand' => 'Hp', 
            'model' => 'HP Elite Dragonfly', 
            'condition' => 'New', 
            'year' => '2020', 
            'processor' => 'Core i7', 
            'speed' => '2.7GHz', 
            'memory' => '16', 
            'screen' => '17', 
            'color' => 'Silver', 
            'os' => 'Windows', 
            'storage' => '512',
            'storage_type' => 'ssd',
            'graphics' => 'RTX 2060 Max',
            'image' => 'hpelite1.jpg',
            'category' => "electronics",
            'sub_category' => "laptop",
        ]);
    }
}
