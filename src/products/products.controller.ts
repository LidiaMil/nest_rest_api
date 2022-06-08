import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductService){

    }
    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(){
        return this.productService.getAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOne(@Param('id') id: string){
        return this.productService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProduct: CreateProductDto){
        return this.productService.create(createProduct)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return `Remove`+ id
    }


    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id:string, @Body() updateProduct: UpdateProductDto){
        return `UPDAAATE: ${id}
                Title: ${updateProduct.title}
                Price: ${updateProduct.price}`
    }
}
