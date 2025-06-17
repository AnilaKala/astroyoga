import { Component } from '@angular/core';

@Component({
  selector: 'app-astrology-layout',
  template: `
    <app-shared-header [currentPage]="'astrology'"></app-shared-header>
    <router-outlet></router-outlet>
    <app-shared-footer></app-shared-footer>
  `,
  styleUrl: './astrology-layout.component.scss'
})
export class AstrologyLayoutComponent {

}
