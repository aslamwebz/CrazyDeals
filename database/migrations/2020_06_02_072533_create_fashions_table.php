<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFashionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fashions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('brand');
            $table->integer('available');
            $table->integer('sold');
            $table->integer('price');
            $table->integer('discount');
            $table->json('colors');
            $table->json('sizes');
            $table->string('featured');
            $table->string('shipping');
            $table->string('condition');
            $table->text('image');
            $table->integer('user_id');
            $table->string('category');
            $table->string('sub_category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fashions');
    }
}
