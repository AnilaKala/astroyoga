import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstrologyLayoutComponent } from './components/astrology-layout/astrology-layout.component';
import { YogaLayoutComponent } from './components/yoga-layout/yoga-layout.component';
import { AstrologyHomeComponent } from './pages/astrology/astrology-home/astrology-home.component';
import { BlogsComponent } from './pages/astrology/astrology-blogs/blogs/blogs.component';
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
import { BlogDetailComponent } from './pages/astrology/astrology-blogs/blog-detail/blog-detail.component';
import { ContactUsComponent } from './pages/shared/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/shared/about-us/about-us.component';

const routes: Routes = [
  // This handles the base route within RegularUserModule
  {
    path: '',
    redirectTo: 'astrology/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'astrology',
    component: AstrologyLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AstrologyHomeComponent },
      { path: 'horoscope', component: HoroscopeComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'blogs/:id', component: BlogDetailComponent },
      { path: 'services', component: AstrologyServicesComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  },
  {
    path: 'yoga',
    component: YogaLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: YogaHomeComponent },
      // Add more yoga routes if needed
    ]
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RegularUserRoutingModule {}