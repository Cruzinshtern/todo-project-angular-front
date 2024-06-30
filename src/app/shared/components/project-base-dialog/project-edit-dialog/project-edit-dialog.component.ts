import { Component, InputSignal, OnInit, OutputEmitterRef, inject, input, output } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectButtonComponent } from '../../project-button/project-button.component';
import { ProjectIconComponent } from '../../project-icon/project-icon.component';
import { ITodo } from '../../../interfaces/todo.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'project-edit-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatIconModule, ProjectButtonComponent, ProjectIconComponent, TranslateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-edit-dialog.component.html',
  styleUrl: './project-edit-dialog.component.scss'
})
export class ProjectEditDialogComponent implements OnInit {
  title: InputSignal<string | undefined> = input.required<string | undefined>();
  confirmBtnText: InputSignal<string | undefined> = input.required<string | undefined>();
  dialogAction: OutputEmitterRef<boolean> = output<boolean>();
  todoData: InputSignal<ITodo | undefined> = input<ITodo | undefined>();

  form: FormGroup;

  constructor(private _fb: FormBuilder) {} 

  ngOnInit() {
    this.form = this._fb.group({
      title: this.todoData()?.title,
      description: this.todoData()?.description,
      start_at: this.todoData()?.start_at
    });
  }

  close(): void {
    this.dialogAction.emit(false);
  }

  confirm(): void {
    this.dialogAction.emit(true);
  }
}
