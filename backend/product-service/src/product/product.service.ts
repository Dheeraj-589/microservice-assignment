import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  private products = [
    {
      id: 1,
      name: "Laptop",
      description: "Gaming Laptop",
      price: 1000,
      stock: 10
    }
  ];

  create(product) {

    const newProduct = {
      id: Date.now(),
      ...product
    };

    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id:number){
    return this.products.find(p => p.id == id);
  }

}