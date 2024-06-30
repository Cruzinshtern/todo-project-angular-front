import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import {} from '@angular/common/http';
import { ProjectLanguageSelectorComponent } from '../shared/components/project-language-selector/project-language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, ProjectLanguageSelectorComponent, TranslateModule],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
