import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyPredictionComponent } from './astrology/components/predictions/monthly-prediction/monthly-prediction.component';
import { YearlyPredictionComponent } from './astrology/components/predictions/yearly-prediction/yearly-prediction.component';
import { ArticlesPageComponent } from './astrology/pages/articles-page/articles-page.component';
import { AstrologyHomePageComponent } from './astrology/pages/astrology-home/astrology-home.component';
import { BlogPageComponent } from './astrology/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './astrology/pages/contact-page/contact-page.component';
import { CoursesPageComponent } from './astrology/pages/courses-page/courses-page.component';
import { ServicesPageComponent } from './astrology/pages/services-page/services-page.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AstrologyLayoutComponent } from './layouts/astrology-layout/astrology-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { YogaLayoutComponent } from './layouts/yoga-layout/yoga-layout.component';
import { YogaHomePageComponent } from './yoga/pages/yoga-home/yoga-home.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // Main layout for general pages
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'page-not-found', component: PageNotFoundComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    ],
  },
  
  {
    path: 'astrology',
    component: AstrologyLayoutComponent, // Layout for astrology-related pages
    children: [
      { path: 'home', component: AstrologyHomePageComponent },
      { path: 'predictions/monthly-prediction', component: MonthlyPredictionComponent },
      { path: 'predictions/yearly-prediction', component: YearlyPredictionComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'services', component: ServicesPageComponent },
      { path: 'articles', component: ArticlesPageComponent },
      { path: 'blogs', component: BlogPageComponent },
      { path: 'contact-us', component: ContactPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route for astrology
    ],
  },

  {
    path: 'yoga',
    component: YogaLayoutComponent, // Layout for yoga-related pages
    children: [
      { path: 'home', component: YogaHomePageComponent },
      // { path: 'classes', component: ClassesPageComponent },
      // { path: 'meditation', component: MeditationPageComponent },
      // { path: 'about-us', component: AboutUsPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route for yoga
    ],
  },

  { path: '**', redirectTo: 'page-not-found' }, // Catch-all route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
