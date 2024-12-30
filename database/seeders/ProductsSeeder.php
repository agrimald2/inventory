<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            ['code' => 'ESSQ-6WSH-A38M-W9U6', 'description' => 'Cerveza Pacifico Clara Sixpack Lata 269 ml', 'image_url' => 'products/1.png'],
            ['code' => 'FVZ8-BK8R-EBVT-U92W', 'description' => 'Chocolate Ferrero Rocher 100 g', 'image_url' => 'products/2.png'],
            ['code' => 'J23X-F9LD-WYZM-K99V', 'description' => 'Pack 02 Cerveza Pilsen Callao Sixpack Botella 305 ml', 'image_url' => 'products/3.png'],
            ['code' => 'EZS2-KSYU-EMXP-G4WD', 'description' => 'Ace Regular Polvo 500 g', 'image_url' => 'products/4.png'],
            ['code' => 'YYEB-65Y9-A6UP-HM4Q', 'description' => 'Ayudín Limón 750 g', 'image_url' => 'products/5.png'],
            ['code' => 'X9H5-R8F3-WMED-NT84', 'description' => 'Arroz Costeño Graneadito 750 g', 'image_url' => 'products/6.png'],
            ['code' => 'LPWM-R9ET-CQMX-ASCN', 'description' => 'Aceite Primor Clasico 1 Lt', 'image_url' => 'products/7.png'],
            ['code' => 'F263-BM66-QUFF-49XB', 'description' => 'Bebida de Cebada Ecco 170 g', 'image_url' => 'products/8.png'],
            ['code' => 'CMZD-U5SH-X7EB-4PG2', 'description' => 'Cafe Sello Rojo 425 Gr', 'image_url' => 'products/9.png'],
            ['code' => 'LDDK-ZKW8-7N95-UEVS', 'description' => 'Cereal Chocapic 90 g', 'image_url' => 'products/10.png'],
            ['code' => '76BG-PFSA-S568-VZPD', 'description' => 'Sixpack Inca Kola 500ml', 'image_url' => 'products/11.png'],
            ['code' => 'XP7B-V57Y-VAEZ-XRGR', 'description' => 'Gaseosa Inca Kola Sin Azucar Twopack Pet X 1.5 Lt', 'image_url' => 'products/12.png'],
            ['code' => 'TMZD-9WTW-Z7MV-3DR3', 'description' => 'Chocolate Kit Kat 41.5 g', 'image_url' => 'products/13.png'],
            ['code' => 'UZD3-WTDL-W59X-U7T7', 'description' => 'Gaseosa Fanta Piña 3 Lt', 'image_url' => 'products/14.png'],
            ['code' => 'RU9A-YL73-QRNU-TPED', 'description' => 'Sopa Ajinomen de Gallina 80 g', 'image_url' => 'products/15.png'],
        ]);
    }
}
