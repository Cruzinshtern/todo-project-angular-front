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

  login(body: IUserLogin): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>(`${this.basicUrl}/auth/login`, body);
  }

  register(body: IUserRegister): Observable<IUserRegister> {
    return this._http.post<IUserRegister>(`${this.basicUrl}/users/create`, body);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(environment.project_token);
  }

  logout(): void {
    localStorage.removeItem(environment.project_token);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(environment.project_token, token);
  }
}
