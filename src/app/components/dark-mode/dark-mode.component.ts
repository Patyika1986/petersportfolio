import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-dark-mode',
  imports: [],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss'
})
export class DarkModeComponent {
  constructor(public themeService: ThemeService) {
    this.themeService.initializeTheme(); // Dark Mode initialisieren
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
