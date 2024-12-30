<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryMovement extends Model
{
    protected $table = 'inventory_movements';

    protected $fillable = ['code', 'type', 'quantity', 'date', 'user'];

    /**
     * Get the product that owns the inventory movement.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'code', 'code');
    }
}
