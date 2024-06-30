import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITabItem } from '../../interfaces/tab-item.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'project-tabs',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule, MatTooltipModule],
  templateUrl: './project-tabs.component.html',
  styleUrl: './project-tabs.component.scss',
})
export class ProjectTabsComponent {
  /**
   * An array of tabs with specific structure.
   */
  @Input({ required: true }) tabs: ITabItem[];
  
  /**
   * @returns {number} An index of the selected tab
   */
  @Output() selectedTab: EventEmitter<number> = new EventEmitter<number>();

  selectTab(tab: ITabItem): void {
    const idx = this.tabs.findIndex((el: ITabItem) => el.key === tab.key);
    this.selectedTab.emit(idx);
  }
}
