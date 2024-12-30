<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

class ProductsController extends Controller
{
    public function index()
    {
        Log::info('ProductsController@index');
        return Inertia::render('Products/Index');
    }

    public function getProducts()
    {
        $products = Product::get();
        return response()->json($products);
    }
}
