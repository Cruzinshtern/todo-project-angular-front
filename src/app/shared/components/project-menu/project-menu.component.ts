import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MENU_ITEMS } from '../../constants/menu-items.const';
import { IMenuItem } from '../../interfaces/menu-item.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'project-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {
  isOpened: boolean = false;
  expandMenuItem: IMenuItem = MENU_ITEMS[0];
  reduceMenuItem: IMenuItem = MENU_ITEMS[1];
  commonMenuItems: IMenuItem[] = MENU_ITEMS.slice(2, -1);
  bottomMenuItem: IMenuItem = MENU_ITEMS[MENU_ITEMS.length - 1];

  constructor(private _router: Router, private _authService: AuthService) {}

  toggleOpen() {
    this.isOpened = !this.isOpened;
  }

  async handleNavigation(path: string | null) {
    await this._router.navigate([path]);
  }

  async handleLogout() {
    this._authService.logout();
    this._router.navigate(['auth']);
  }
}
