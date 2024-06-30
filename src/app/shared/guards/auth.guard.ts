import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    const isAuth = this._authService.isLoggedIn();
    if (!isAuth) {
      this._router.navigate(['auth']);
      return false;
    }
    return true;
  }
}