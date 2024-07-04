import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-item.interface';
import { MENU_ITEMS } from '../../constants/menu-items.const';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'project-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {
  commonMenuItems: IMenuItem[] = MENU_ITEMS;

  constructor(private _router: Router) {}

  async handleNavigation(path: string | null) {
    await this._router.navigate([path]);
  }
}
