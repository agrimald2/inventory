<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = ['code', 'description', 'image_url'];

    /**
     * Get the inventory movements for the product.
     */
    public function inventoryMovements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'code', 'code');
    }

    /**
     * Get the stock attribute for the product.
     */
    public function getStockAttribute(): int
    {
        if ($this->inventoryMovements->isEmpty()) {
            return 0;
        }

        $entradaSum = $this->inventoryMovements->where('type', 'in')->sum('quantity');
        $salidaSum = $this->inventoryMovements->where('type', 'out')->sum('quantity');
        return $entradaSum - $salidaSum;
    }

    /**
     * Ensure the stock attribute is included in the array representation of the model.
     *
     * @return array<int, string>
     */
    protected $appends = ['stock'];
}