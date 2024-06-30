import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private _translateService: TranslateService) { }

  getLanguage(): void {
    const lang = localStorage.getItem(environment.project_lang_local_storage_key) || environment.defaultLocale;
    this._translateService.use(lang);
  }

  setLanguage(lang: string): void {
    localStorage.setItem(environment.project_lang_local_storage_key, lang);
    this._translateService.use(lang);
  }
}