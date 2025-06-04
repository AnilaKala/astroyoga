import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { FavouriteUsersComponent } from './pages/favourite-users/favourite-users.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailComponent,
    AddUserComponent,
    FavouriteUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}