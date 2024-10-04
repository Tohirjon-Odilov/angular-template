import { Injectable } from '@angular/core';
import { THEMES } from '../../config/constants'; // Global o'zgaruvchilar
import { LoggerService } from './logger.service'; // Logger xizmati

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = false;

  constructor(private logger: LoggerService) {}

  // Tema yuklash (saqlangan tema bo'lsa, uni qo'llash)
  loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.isDarkMode = theme === THEMES.DARK; // Global o'zgaruvchi orqali
      this.applyTheme();
      this.logger.info(`Loaded theme: ${theme}`); // Logger orqali kuzatish
    }
  }

  // Temani almashtirish va saqlash
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const selectedTheme = this.isDarkMode ? THEMES.DARK : THEMES.LIGHT; // Global o'zgaruvchilar orqali
    localStorage.setItem('theme', selectedTheme);
    this.applyTheme();
    this.logger.info(`Theme switched to: ${selectedTheme}`); // Logger orqali kuzatish
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add(THEMES.DARK); // Global o'zgaruvchilar orqali
      document.body.classList.remove(THEMES.LIGHT);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
  }
}
