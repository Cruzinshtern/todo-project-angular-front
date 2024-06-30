import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem(environment.project_token);
    const request = req.clone({
        setHeaders: {
        Authorization: `${ token }`
        }
    });

    return next(request);
  };