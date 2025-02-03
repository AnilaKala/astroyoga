import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstrologyLayoutComponent } from './astrology-layout.component';
import { RouterModule } from '@angular/router';
import { AstrologyHeaderComponent } from '../../astrology/components/astrology-header/astrology-header.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonthlyPredictionComponent } from '../../astrology/components/predictions/monthly-prediction/monthly-prediction.component';
import { YearlyPredictionComponent } from '../../astrology/components/predictions/yearly-prediction/yearly-prediction.component';
import { CourseListComponent } from '../../astrology/components/course-list/course-list.component';



@NgModule({
  declarations: [
    AstrologyLayoutComponent,
    AstrologyHeaderComponent,
    MonthlyPredictionComponent,
    YearlyPredictionComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  //  NgbCollapseModule , 
    NgbModule
  ],
  exports: [
    AstrologyLayoutComponent,
    AstrologyHeaderComponent,
    MonthlyPredictionComponent,
    YearlyPredictionComponent,
    CourseListComponent
  ]
})
export class AstrologyLayoutModule { }
