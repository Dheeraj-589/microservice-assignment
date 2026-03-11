import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')

export class OrderController {

  constructor(private orderService: OrderService){}

  @Post()
  create(@Body() body){
    return this.orderService.createOrder(body);
  }

  @Get()
  findAll(){
    return this.orderService.getOrders();
  }

}