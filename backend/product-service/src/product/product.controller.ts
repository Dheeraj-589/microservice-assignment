import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {

  constructor(private productService: ProductService){}

  @MessagePattern('get_products')
  getProducts(){
    return this.productService.findAll();
  }

  @MessagePattern('get_product')
  getProduct(id:number){
    return this.productService.findOne(id);
  }

}