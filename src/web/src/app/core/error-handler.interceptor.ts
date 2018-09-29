import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((err: any, caught: Observable<any>) => {
          if (err instanceof HttpErrorResponse) {
            alert(`Error ${err.status} ${err.statusText} while fetching data from ${err.url}`);
          }
          return Observable.throw(err);
        })
      );
  }
}
