<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Electronics extends Model
{

    protected $fillable = [
        'name','available','price','discount','sold','brand','model','condition'
        ,'year','processor','speed','memory','screen','color','os','storage', 'image', 'storage_type', 'graphics', 'category', 'sub_category'];
       

    public function electronicsImage(){
        return $this->hasMany('App\ElectronicsImage', 'item_id');
    }
}
