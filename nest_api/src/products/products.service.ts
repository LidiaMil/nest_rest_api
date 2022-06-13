import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update_product.dto";
import { Product, ProductDocument } from "./schemas/products.schema";

@Injectable()
export class ProductService{
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){
        
    }
    private products=[]

    async getAll(){
        return this.productModel.find().exec()
    }

    async getById(id: string){
        return this.productModel.findById(id)
    }

    async create(productDto: CreateProductDto){
        return new this.productModel(productDto).save()
    }

    async remove(id: string){
        return this.productModel.findByIdAndRemove(id)
    }

    async update(id: string, updateProduct: UpdateProductDto){
        return this.productModel.findByIdAndUpdate(id, updateProduct,{ new: true})
    }
}