import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      image: '',
      title: '',
      description: '',
      datetime: '',
      id: 0
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
      if (params['id']) {

        this.productService.getProduct(+params['id']) // + нужен что бы преобразовать значения в числа
        .subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            this.router.navigate(['/']);
          }
        })
      }
    })
  }

}

