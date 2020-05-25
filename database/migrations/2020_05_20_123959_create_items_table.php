<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->text('itemName');
            $table->text('itemDescription');
            $table->text('itemPrice');
            $table->text('itemFeatured');
            $table->text('itemCondition');
            $table->text('itemQuantity');
            $table->text('itemSold');
            $table->text('itemShipping');
            $table->text('itemSeller');
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
        Schema::dropIfExists('items');
    }
}
