import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LOCALES } from '../../constants/locales.const';

@Component({
  selector: 'project-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './project-language-selector.component.html',
  styleUrl: './project-language-selector.component.scss'
})
export class ProjectLanguageSelectorComponent {
  locales: any = LOCALES;

  constructor(private _languageService: LanguageService) {}

  handleLangChange(lang: string) {
    this._languageService.setLanguage(lang);
  }
}
