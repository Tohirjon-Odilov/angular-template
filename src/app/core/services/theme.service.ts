import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = false;

  constructor() {}

  // Tema yuklash (saqlangan tema bo'lsa, uni qo'llash)
  loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.isDarkMode = theme === 'dark';
      this.applyTheme();
    }
  }

  // Temani almashtirish va saqlash
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
