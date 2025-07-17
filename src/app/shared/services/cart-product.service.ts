import { Injectable } from '@angular/core';

@Injectable()
// не будем инжектить на все приложение, будем инжектить его в каждом продукте
export class CartProductService {
  count: number = 0;
  constructor() { }

}
