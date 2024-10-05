import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    AccessDeniedComponent,
       NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorPagesRoutingModule,
    SharedModule
]
})
export class ErrorPagesModule { }
