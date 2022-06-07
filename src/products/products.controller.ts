import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update_product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(){
        return 'get All'
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOne(@Param('id') id: string){
        return 'get one' + id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProduct: CreateProductDto){
        return `Title: ${createProduct.title}
                Price: ${createProduct.price}`
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