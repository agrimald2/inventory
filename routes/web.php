<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\InventoryController;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/products', [ProductsController::class, 'index'])->name('products.index');  
Route::get('/indexProducts', [ProductsController::class, 'index'])->name('products.index.2');  
Route::get('/products/getProducts', [ProductsController::class, 'getProducts'])->name('products.getProducts');

Route::get('/inventory', [InventoryController::class, 'index'])->name('inventory.index');
Route::post('/inventory/store', [InventoryController::class, 'store'])->name('inventory.store');
Route::get('/inventory/getMovements', [InventoryController::class, 'getMovements'])->name('inventory.getMovements');
Route::post('/inventory/markAsMistake', [InventoryController::class, 'markAsMistake'])->name('inventory.markAsMistake');