import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'project-icon',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, TranslateModule, MatIconModule],
  templateUrl: './project-icon.component.html',
  styleUrl: './project-icon.component.scss'
})
export class ProjectIconComponent {
  iconName: InputSignal<string | 'status'> = input.required<string | 'status'>();
  item: InputSignal<ITodo | undefined> = input<ITodo>();
  tooltipText: InputSignal<string> = input.required<string>();
  tooltipPosition: InputSignal<TooltipPosition> = input<TooltipPosition>('above');
}
