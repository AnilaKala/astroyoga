import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AstrologyLayoutComponent } from "./components/astrology-layout/astrology-layout.component";
import { SharedFooterComponent } from "./components/shared-footer/shared-footer.component";
import { SharedHeaderComponent } from "./components/shared-header/shared-header.component";
import { YogaLayoutComponent } from "./components/yoga-layout/yoga-layout.component";
import { AstrologyHomeComponent } from "./pages/astrology/astrology-home/astrology-home.component";
import { BlogsComponent } from "./pages/astrology/blogs/blogs.component";
import { AstrologyCoursesComponent } from "./pages/astrology/courses/courses.component";
import { DailyHoroscopeComponent } from "./pages/astrology/horoscope/daily/daily.component";
import { HoroscopeComponent } from "./pages/astrology/horoscope/horoscope.component";
import { MonthlyHoroscopeComponent } from "./pages/astrology/horoscope/monthly/monthly.component";
import { YearlyHoroscopeComponent } from "./pages/astrology/horoscope/yearly/yearly.component";

import { YogaCoursesComponent } from "./pages/yoga/courses/courses.component";
import { DailyYogaComponent } from "./pages/yoga/daily-yoga/daily-yoga.component";
import { YogaServicesComponent } from "./pages/yoga/services/services.component";
import { YogaHomeComponent } from "./pages/yoga/yoga-home/yoga-home.component";
import { RegularUserRoutingModule } from "./regular-user-routing.module";

@NgModule({
    declarations: [
      AstrologyLayoutComponent,
      YogaLayoutComponent,
      SharedHeaderComponent,
      SharedFooterComponent,
      AstrologyHomeComponent,
      HoroscopeComponent,
      DailyHoroscopeComponent,
      MonthlyHoroscopeComponent,
      YearlyHoroscopeComponent,
      BlogsComponent,
      AstrologyCoursesComponent,
      AstrologyCoursesComponent,
      YogaServicesComponent,
      YogaCoursesComponent,
      
      YogaHomeComponent,
      DailyYogaComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RegularUserRoutingModule  ],
  })
  export class RegularUserModule {}