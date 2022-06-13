import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductService){

    }
    @Get()
    getAll(){
        return this.productService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.productService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProduct: CreateProductDto){
        return this.productService.create(createProduct)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.productService.remove(id)
    }


    @Put(':id')
    update(@Param('id') id:string, @Body() updateProduct: UpdateProductDto){
        return this.productService.update(id, updateProduct)
    }
}
