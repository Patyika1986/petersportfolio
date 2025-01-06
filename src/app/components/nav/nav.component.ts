import { NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DarkModeComponent } from "../dark-mode/dark-mode.component";

@Component({
  selector: 'app-nav',
  imports: [NgIf, TranslateModule, DarkModeComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isMenuOpen = false;
  isMobileView = false;

  constructor() {}

  translate: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 768; // Mobile-Ansicht prüfen
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  goToPart(id: string): void {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error(`Element with id '${id}' not found.`);
      }
    }, 0);
  }
  

  changeLanguage(event: any) {
    this.translate.use(event.target.value);
  }
}
