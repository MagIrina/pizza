import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent; // убераем ошибку через оператор не нулевого значения "!"


  @ViewChild('elem')
  private elem!: ElementRef; // используем ElementRef так как сдесь мы ссылаемся на ссылку элемента

  constructor(public cartProductServices: CartProductService) {
    this.product = {
      image: '',
      title: '',
      description: '',
      datetime: '',
      id: 0
    }
  }

  // addProductToCart() {
  //   this.cartProductServices.count++; //
  //   // this.addToCartEvent.emit(this.product-card);
  //   // this.addToCartEvent.emit(title);
  //   // this.addToCartEvent.emit(this.titleComponent.toUpper());  // через @ViewChild
  //   this.addToCartEvent.emit(this.titleComponent.title);  // через @ViewChild
  // }

}
