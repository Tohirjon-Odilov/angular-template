import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AccessDeniedComponent,
       NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorPagesRoutingModule
  ]
})
export class ErrorPagesModule { }
