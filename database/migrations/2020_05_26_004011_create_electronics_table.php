<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElectronicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('electronics', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('available');
            $table->integer('price');
            $table->integer('discount');
            $table->integer('sold');
            $table->string('brand');
            $table->string('model');
            $table->string('condition');
            $table->string('year');
            $table->string('processor');
            $table->string('speed');
            $table->string('memory');
            $table->string('screen');
            $table->string('color');
            $table->string('os');
            $table->string('storage');
            $table->string('storage_type');
            $table->string('graphics');
            $table->string('image');
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
        Schema::dropIfExists('electronics');
    }
}
