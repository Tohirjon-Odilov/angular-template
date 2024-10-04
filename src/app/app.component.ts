import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Ko'p tillilik uchun ngx-translate
import { ThemeService } from './core/services/theme.service'; // Dark/Light Mode boshqaruvi uchun xizmat
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-template';
  currentLang: string = 'uz'; // Standart til

  constructor(
    private translate: TranslateService,
    public themeService: ThemeService,
    private logger: LoggerService
  ) {
    // Qo'llab-quvvatlanadigan tillar
    this.translate.addLangs(['en', 'ru', 'uz']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Foydalanuvchi tanlagan tilni yuklash
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.changeLang(savedLang);
    }

    // Dark yoki Light rejimni yuklash
    this.themeService.loadTheme();
  }

  // Tilni o'zgartirish
  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Tanlangan tilni saqlash
  }

  // Dark/Light rejimni almashtirish
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
