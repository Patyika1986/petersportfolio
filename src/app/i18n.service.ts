import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  // private currentLanguage = new BehaviorSubject<string>('en');
  // private translations: any = {};

  // constructor(private http: HttpClient) {
  //   this.loadTranslations('en');
  // }

  // setLanguage(lang: string) {
  //   this.currentLanguage.next(lang);
  //   this.loadTranslations(lang);
  // }

  // getLanguage() {
  //   return this.currentLanguage.asObservable();
  // }

  // translate(key: string, params?: any): string {
  //   let translation = this.translations[key] || key;
  //   if (params) {
  //     Object.keys(params).forEach((param) => {
  //       translation = translation.replace(`{{ ${param} }}`, params[param]);
  //     });
  //   }
  //   return translation;
  // }

  // private loadTranslations(lang: string) {
  //   this.http.get(`/assets/i18n/${lang}.json`).subscribe({
  //     next: (data: any) => {
  //       this.translations = data;
  //     },
  //     error: (error) => {
  //       console.error(`Error loading translations for language ${lang}:`, error);
  //       this.translations = {};
  //     }
  //   });
  // }
}
