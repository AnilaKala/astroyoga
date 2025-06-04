import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavouriteUsersComponent } from './pages/favourite-users/favourite-users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/:id', component: UserDetailComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'favourite-users', component: FavouriteUsersComponent },
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
