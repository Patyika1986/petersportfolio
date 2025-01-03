import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  initializeTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }
}
