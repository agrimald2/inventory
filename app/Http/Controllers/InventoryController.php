<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\InventoryMovement;
use Illuminate\Support\Facades\Auth;
class InventoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Inventory/Index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
            'type' => 'required|string',
            'quantity' => 'required|integer',
        ]);

        if ($request->type === 'out') {
            $currentStock = InventoryMovement::where('code', $request->code)
                ->sum('quantity');

            if ($currentStock < $request->quantity) {
                return response()->json(['message' => 'No hay suficiente stock para realizar la salida'], 400);
            }
        }

        $inventoryMovement = new InventoryMovement();
        $inventoryMovement->code = $request->code;
        $inventoryMovement->type = $request->type;
        $inventoryMovement->quantity = $request->type === 'out' ? -$request->quantity : $request->quantity;
        $inventoryMovement->user = Auth::user()->name;
        $inventoryMovement->save();

        return response()->json(['message' => 'Movimiento de inventario registrado correctamente']);
    }

    public function getMovements(Request $request)
    {
        $query = InventoryMovement::query();

        if ($request->filled('start_date')) {
            $query->whereDate('created_at', '>=', $request->input('start_date'));
        }

        if ($request->filled('end_date')) {
            $query->whereDate('created_at', '<=', $request->input('end_date'));
        }

        if ($request->filled('type')) {
            $query->where('type', $request->input('type'));
        }

        $movements = $query->get();
        return response()->json($movements);
    }

    public function markAsMistake(Request $request)
    {
        $movement = InventoryMovement::find($request->input('movement_id'));
        $movement->type = 'mistake';
        $movement->save();
        return response()->json(['message' => 'Movimiento marcado como error']);
    }
}
