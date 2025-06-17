import { Component } from '@angular/core';

@Component({
  selector: 'app-yoga-layout',
  template: `
  <app-shared-header [currentPage]="'yoga'"></app-shared-header>
  <router-outlet></router-outlet>
  <app-shared-footer></app-shared-footer>
`,
  styleUrl: './yoga-layout.component.scss'
})
export class YogaLayoutComponent {

}
