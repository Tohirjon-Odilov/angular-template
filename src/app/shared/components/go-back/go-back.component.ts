import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.scss'
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // Ortga qaytish
  }
}
