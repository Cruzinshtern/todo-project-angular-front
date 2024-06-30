import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProjectDialogData } from '../../interfaces/project-dialog-data.interface';
import { ProjectDeleteDialogComponent } from './project-delete-dialog/project-delete-dialog.component';
import { ProjectEditDialogComponent } from './project-edit-dialog/project-edit-dialog.component';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-project-base-dialog',
  standalone: true,
  imports: [ProjectDeleteDialogComponent, ProjectEditDialogComponent],
  templateUrl: './project-base-dialog.component.html',
  styleUrl: './project-base-dialog.component.scss'
})
export class ProjectBaseDialogComponent {
  title: string | undefined;
  text: string | undefined;
  confirmBtnText: string | undefined;
  dialogType: 'edit' | 'delete';
  todoData: ITodo | undefined;

  constructor(
    public dialogRef: MatDialogRef<ProjectBaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProjectDialogData,
  ) {
    const { title, text, confirmBtnText, dialogType, todoData } = data;
    this.title = title;
    this.text = text;
    this.confirmBtnText = confirmBtnText;
    this.dialogType = dialogType;
    this.todoData = todoData;
  }

  handleDialogAction(action: boolean) {
    this.dialogRef.close(action);
  }
}
