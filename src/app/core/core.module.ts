import { ThemeService } from './services/theme.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule],
  providers: [AuthService, AuthGuard, ThemeService, UserService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule faqat bir marta yuklanishi kerak!');
    }
  }
}
