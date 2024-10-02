import { CustomButtonComponent } from './components/custom-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [
    CustomButtonComponent,
    // HoverDirective,
    // FormatDatePipe
  ],
  imports: [CommonModule],
  exports: [
    CustomButtonComponent,
    // HoverDirective,
    // FormatDatePipe,
    CommonModule
  ]
})
export class SharedModule { }
