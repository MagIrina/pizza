import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient,
              private router: Router) {
  }

  public products: ProductType[] = [];
  //переменная лоадинг
  loading: boolean = false;


  ngOnInit(): void {
    this.loading = true; //включения лоудера

    this.productService.getProducts()
      //лучше лоадер отключать через tap, тогда не будет дублирования кода
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )

      .subscribe(
        //добавим обработку ошибок
        {
          next: (data) => {
            // this.loading = false; //отключения лоадура
            this.products = data;
            console.log(data);
          },
          error: (error) => {
            // this.loading = false;
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }
}


// ngOnInit(): void {
// this.products = this.productService.getProducts();

// this.http.get<ProductType[]>('http://testologia.ru/pizzas')
// this.http.get<{ data: ProductType[] }>('http://testologia.ru/pizzas?extraField=1')
//   .pipe(
//     tap((result) => {
//       console.log(result);
//     }),
//     map((result) => (result.data))
//   )
//   .subscribe(
//     //добавим обработку ошибок
//     {
//       next: (data) => {
//         this.products = data;
//       }, error: (error) => {
//         console.log(error);
//         this.router.navigate(['/']);
//       }
//     }
//   )

//использование оператора catchError
// this.http.get<{ data: ProductType[] }>('http://testologi.ru/pizzas?extraField=1')
// .pipe(
//     tap((result) => {
//       console.log(result);
//     }),
//     map((result) => (result.data)),
//     // catchError(error => {
//     //   return of( []);
//     // }),
//     retry(3) // указываем кол-во повторных запросов
//   )
