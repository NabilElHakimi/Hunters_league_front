import { HttpInterceptorFn } from '@angular/common/http';

export const loggedInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('authToken') || "";

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  return next(req);
  
};
