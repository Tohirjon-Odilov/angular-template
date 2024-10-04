import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';  // HTTP_INTERCEPTORS import qilish
import { AuthInterceptor } from './interceptors/auth.interceptor';  // AuthInterceptor import qilish
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthGuard,
    ThemeService,
    UserService,
    LoggerService,
    {
      provide: HTTP_INTERCEPTORS, // Interceptor'ni HTTP_INTERCEPTORS ga qo'shish
      useClass: AuthInterceptor,  // AuthInterceptor dan foydalanish
      multi: true,  // multi: true - bu interceptorni bir nechta interceptorlar bilan ishlashga imkon beradi
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, private logger: LoggerService) {
    if (parentModule) {
      this.logger.error('CoreModule faqat bir marta yuklanishi kerak!');
      throw new Error('CoreModule faqat bir marta yuklanishi kerak!');
    } else {
      this.logger.info('CoreModule yuklandi');
    }
  }
}
