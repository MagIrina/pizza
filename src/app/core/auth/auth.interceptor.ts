import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // для изменения.исправления запроса
    const authToken = this.authService.getToken();
    // console.log(req); // можем посмотреть в консоли, что отправляет запрос
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    })
    // return next.handle(authReq);

    //чтобы реализовать для данных ответа
    return next.handle(authReq).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log(event);
          }
        }
      })
    );
    // return next.handle(req); // по факту эта функция принимает запрос и передает дальше и все(не изменяет и ничего не делает)
  }
}
