import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaLayoutComponent } from './yoga-layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    YogaLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    YogaLayoutComponent
  ]
})
export class YogaLayoutModule { }
