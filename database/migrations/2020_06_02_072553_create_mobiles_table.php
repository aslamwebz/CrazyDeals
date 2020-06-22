<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMobilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('brand');
            $table->string('model');
            $table->integer('available');
            $table->integer('sold');
            $table->integer('price');
            $table->integer('discount');
            $table->string('processor');
            $table->integer('memory');
            $table->integer('storage');
            $table->string('display');
            $table->string('camera');
            $table->string('featured');
            $table->string('shipping');
            $table->string('condition');
            $table->string('color');
            $table->string('year');
            $table->string('os');
            $table->integer('user_id');
            $table->text('image');
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
        Schema::dropIfExists('mobiles');
    }
}
