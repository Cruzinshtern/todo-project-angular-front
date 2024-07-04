import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './shared/services/language.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProjectMenuComponent } from './shared/components/project-menu/project-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, ProjectMenuComponent],
  providers: [AuthGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'todo-project-angular-front';
  showMenu: boolean = false;

  constructor (private _languageService: LanguageService, private _router: Router) {}

  ngOnInit(): void {
    this._languageService.getLanguage();
    this._router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        const url = data.url;
        this.showMenu = !url.includes('auth');
      }
    });
  }
}
