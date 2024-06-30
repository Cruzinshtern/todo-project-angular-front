import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectButtonComponent } from '../../project-button/project-button.component';
import { ProjectIconComponent } from '../../project-icon/project-icon.component';

@Component({
  selector: 'project-delete-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatIconModule, ProjectButtonComponent, ProjectIconComponent, TranslateModule],
  templateUrl: './project-delete-dialog.component.html',
  styleUrl: './project-delete-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDeleteDialogComponent {
  title: InputSignal<string | undefined> = input.required<string | undefined>();
  text: InputSignal<string | undefined> = input<string | undefined>();
  confirmBtnText: InputSignal<string | undefined> = input.required<string | undefined>();
  dialogAction: OutputEmitterRef<boolean> = output<boolean>();

  close(): void {
    this.dialogAction.emit(false);
  }

  confirm(): void {
    this.dialogAction.emit(true);
  }
}
