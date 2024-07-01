import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'project-button',
  standalone: true,
  imports: [],
  templateUrl: './project-button.component.html',
  styleUrl: './project-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectButtonComponent {
  @Input() type: 'submit' | 'reset' | 'cancel' | 'button' = 'button';
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'default' = 'default';
  @Input() disabled: boolean = false;
}
