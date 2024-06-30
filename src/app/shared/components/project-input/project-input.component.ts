import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'project-input',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-input.component.html',
  styleUrl: './project-input.component.scss'
})
export class ProjectInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() _formControl_: AbstractControl;

  handleInputChange(event: any) {
    this._formControl_.patchValue(event.target.value);
  }
}
