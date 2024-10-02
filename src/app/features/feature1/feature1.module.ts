import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './components/feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule, Feature1RoutingModule],
})
export class Feature1Module {}
