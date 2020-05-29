<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Electronics extends Model
{

    protected $fillable = [
        'name','quantity','price','discount','sold','brand','model','condition'
        ,'year','processor','speed','memory','screen','color','os','storage', 'image'];
       

    public function electronicsImage(){
        return $this->hasMany('App\ElectronicsImage', 'item_id');
    }
}
