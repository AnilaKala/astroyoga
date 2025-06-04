import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <app-header></app-header>
    <div class="d-flex">
      <app-sidebar></app-sidebar>
      <div class="flex-fill p-3">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [``]
})
export class AdminComponent {}