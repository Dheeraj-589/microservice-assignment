import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {

  constructor(
    @Inject('PRODUCT_SERVICE')
    private productClient: ClientProxy
  ){}

  private orders: any[] = [];

  async createOrder(data){

    const product = await firstValueFrom(
      this.productClient.send('get_product', data.productId)
    );

    if(!product){
      return {message:'Product not found'};
    }

    const order = {

      id: Date.now(),
      product,
      quantity: data.quantity,
      totalPrice: product.price * data.quantity

    };

    this.orders.push(order);

    return order;

  }

  getOrders(){
    return this.orders;
  }

}