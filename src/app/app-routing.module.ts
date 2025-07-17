import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [
  //ленивая загрузка
  {
    path: '',
    component: LayoutComponent,
    //сдесь мы передаем массив дочерних роутов для главного роута
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)},
    ]
  },

  //так же можно настроить ридерект если страница изменилась а в поисках осталась старая
  { path: 'pizzas', redirectTo: 'products' },
  // { path: '**', component: 404}, //если нет 404, делаем ридерект на главную страницу
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
