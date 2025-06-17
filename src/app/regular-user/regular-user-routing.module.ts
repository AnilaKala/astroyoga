import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstrologyLayoutComponent } from './components/astrology-layout/astrology-layout.component';
import { YogaLayoutComponent } from './components/yoga-layout/yoga-layout.component';
import { AstrologyHomeComponent } from './pages/astrology/astrology-home/astrology-home.component';
import { BlogsComponent } from './pages/astrology/blogs/blogs.component';
import { AstrologyCoursesComponent } from './pages/astrology/courses/courses.component';

import { DailyHoroscopeComponent } from './pages/astrology/horoscope/daily/daily.component';
import { HoroscopeComponent } from './pages/astrology/horoscope/horoscope.component';
import { MonthlyHoroscopeComponent } from './pages/astrology/horoscope/monthly/monthly.component';
import { YearlyHoroscopeComponent } from './pages/astrology/horoscope/yearly/yearly.component';
import { AstrologyServicesComponent } from './pages/astrology/services/services.component';
import { YogaCoursesComponent } from './pages/yoga/courses/courses.component';

import { DailyYogaComponent } from './pages/yoga/daily-yoga/daily-yoga.component';
import { YogaServicesComponent } from './pages/yoga/services/services.component';
import { YogaHomeComponent } from './pages/yoga/yoga-home/yoga-home.component';

const routes: Routes = [
    {
      path: 'astrology',
      component: AstrologyLayoutComponent,
      children: [
        { path: 'dashboard', component: AstrologyHomeComponent },
        // {
        //   path: 'horoscope',
        //   component: HoroscopeComponent,
        //   children: [
        //     { path: 'daily', component: DailyHoroscopeComponent },
        //     { path: 'monthly', component: MonthlyHoroscopeComponent },
        //     { path: 'yearly', component: YearlyHoroscopeComponent },
        //   ],
        // },
        // { path: 'blogs', component: BlogsComponent },
        // { path: 'services', component: AstrologyServicesComponent },
        // { path: 'courses', component: AstrologyCoursesComponent },
       
      ],
    },
    {
      path: 'yoga',
      component: YogaLayoutComponent,
      children: [
        { path: 'dashboard', component: YogaHomeComponent },
        // { path: 'daily-yoga', component: DailyYogaComponent },
        // { path: 'courses', component: YogaCoursesComponent },
        // { path: 'services', component: YogaServicesComponent },
      
      ],
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RegularUserRoutingModule {}