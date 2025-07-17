import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

//теперь сделаем не уровне всего приложения
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`);
    // ajax
    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: { product: string, address: string, phone: string}) {
    return this.http.post<{ success: boolean, message?: string }>(environment.apiURL + `order-pizza`, data);
  }
}

// вариант с отдельной переменной парамс
// getProducts(): Observable<ProductType[]> {
//   let params = new HttpParams();
//   params = params.set('extraField', 1);
//   // ajax
//   return this.http.get<{ data: ProductType[] }>('https://testologia.ru/pizzas', {
//     headers: new HttpHeaders({
//       Authorization: 'auth-token'
//     }),
//     params: params
//   })
//     .pipe(
//       tap(result => {
//         console.log(result);
//       }),
//       map((result) => result.data),
//     )
// }


// return this.http.get<{ data: ProductType[] }>('https://testologia.ru/pizzas?extraField=1', {
//   // observe: 'response',
//   headers: new HttpHeaders({
//     Authorization: 'auth-token'
//   })
// })
//   .pipe(
//     tap((result) => {
//       console.log(result);
//     }),
//     // map((result) => (result.body ? result.body.data : [])),
//     map((result) => result.data),
//     // catchError(error => {
//     //   return of( []);
//     // }),
//     // retry(3) // указываем кол-во повторных запросов
//   )
