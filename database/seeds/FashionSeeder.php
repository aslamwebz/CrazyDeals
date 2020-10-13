<?php

use Illuminate\Database\Seeder;

class FashionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fashions')->insert([
            'name' => 'Adidas Originals Mens T-Shirt California Essentials Crew Neck Short Sleeve Gift', 
            'brand' => 'Adidas', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Men', 
            'image' => 'shirtmen1.png',
            'user_id' => 1,
        ]);
        
        DB::table('fashions')->insert([
            'name' => 'Men Levi 511 Slim Fit Denim Levis 100% Original Jeans 00511-1907 & 259', 
            'brand' => 'Levi', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Men', 
            'image' => 'levidenim1.jpg',
            'user_id' => 1,
        ]);

        DB::table('fashions')->insert([
            'name' => 'Adidas Originals ZX 750 Suede Mens Trainers Sports Casual Retro Shoes UK Sizes            ', 
            'brand' => 'Adidas', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Men', 
            'image' => 'shoemen1.jpg',
            'user_id' => 1,
        ]);

        DB::table('fashions')->insert([
            'name' => 'Women Summer Boho Floral Long Maxi Evening Cocktail Party Beach Dress Sundress·', 
            'brand' => 'Boho', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Women', 
            'image' => 'womendress1.jpg',
            'user_id' => 1,
        ]);

      
        DB::table('fashions')->insert([
            'name' => 'Womens Skinny High Waist Leggings Denim Imitation Pants Solid Soft Jeggings FSDS', 
            'brand' => 'Boho', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Women', 
            'image' => 'womenpant1.jpg',
            'user_id' => 1,
        ]);

        DB::table('fashions')->insert([
            'name' => 'Women Open Toe High Heels Ladies Sexy Pumps Cut Out Sandals fashion Party Shoes', 
            'brand' => 'Boho', 
            'available' => '10',
            'sold' => '10', 
            'price' => '17.99', 
            'discount' => '5', 
            'colors' => json_encode(['red','green', 'blue']), 
            'sizes' => json_encode([12,14, 16]), 
            'featured' => 'yes', 
            'shipping' => 'free', 
            'condition' => 'New', 
            'category' => 'fashion', 
            'sub_category' => 'Women', 
            'image' => 'womenheels1.jpg',
            'user_id' => 1,
        ]);
    }
}
