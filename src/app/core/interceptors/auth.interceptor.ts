import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting request:', req.url);

    const token = localStorage.getItem('authToken') || '';

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    console.log('Modified Request:', modifiedReq);
    return next.handle(modifiedReq);
  }
}
