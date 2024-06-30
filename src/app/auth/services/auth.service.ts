import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../../shared/interfaces/login.interface';
import { ILoginResponse } from '../../shared/interfaces/login-response.interface';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { IUserRegister } from '../../shared/interfaces/register.interface';
import { ToastService } from '../../shared/services/toast.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicUrl = environment.BASIC_URL;

  constructor(private _http: HttpClient, private _toastService: ToastService, private _router: Router) {}

  login(body: IUserLogin): Observable<ILoginResponse | HttpErrorResponse> {
    return this._http.post<ILoginResponse>(`${this.basicUrl}/auth/login`, body)
      .pipe(
        tap(async (data: ILoginResponse) => {
          if (data && data.token) {
            this._setAuthToken(data.token);
            await this._router.navigate(['home']);
          }
        }),
        catchError(err => {
          this._toastService.error(err.error.message);
          return of(err as HttpErrorResponse)
        })
      )
  }

  register(body: IUserRegister): Observable<IUserRegister | HttpErrorResponse> {
    return this._http.post<IUserRegister>(`${this.basicUrl}/users/create`, body)
      .pipe(
        tap(() => {
          this._toastService.success('you have been registered');
        }),
        catchError(err => {
          this._toastService.error(err.error.message);
          return of(err as HttpErrorResponse);
        })
      )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(environment.project_token);
  }

  logout(): void {
    localStorage.removeItem(environment.project_token);
  }

  private _setAuthToken(token: string): void {
    localStorage.setItem(environment.project_token, token);
  }
}
