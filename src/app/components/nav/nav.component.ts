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

  goToPart(part: string) {
    const element = document.getElementById(part)as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  changeLanguage(event: any) {
    this.translate.use(event.target.value);
  }
}
