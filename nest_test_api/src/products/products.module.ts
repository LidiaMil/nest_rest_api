import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { Product, ProductSchema } from "./schemas/products.schema";

@Module({
    controllers: [ProductsController],
    providers: [ProductService],
    imports: [
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema}
        ])
    ]
})

export class ProductsModule {

}