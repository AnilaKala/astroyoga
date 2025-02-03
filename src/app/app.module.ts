import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';

import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AstrologyLayoutModule } from './layouts/astrology-layout/astrology-layout.module';
import { YogaLayoutModule } from './layouts/yoga-layout/yoga-layout.module';
import { RouterModule } from '@angular/router';
import { CoursesPageComponent } from './astrology/pages/courses-page/courses-page.component';
import { ServicesPageComponent } from './astrology/pages/services-page/services-page.component';
import { ArticlesPageComponent } from './astrology/pages/articles-page/articles-page.component';
import { BlogPageComponent } from './astrology/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './astrology/pages/contact-page/contact-page.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CoursesPageComponent,
    ServicesPageComponent,
    ArticlesPageComponent,
    BlogPageComponent,
    ContactPageComponent,

  
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    YogaLayoutModule,
    MainLayoutModule,
    AstrologyLayoutModule,
    RouterModule,
    //NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
