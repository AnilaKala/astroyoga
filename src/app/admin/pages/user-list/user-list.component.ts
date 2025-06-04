import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'User' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Admin' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' }
  ];

  constructor(private router: Router) {}

  goToDetail(userId: number) {
    this.router.navigate(['/admin/users', userId]);
  }

  goToEdit(userId: number) {
    this.router.navigate(['/admin/users', userId], { queryParams: { edit: true } });
  }

  deleteUser(userId: number) {
    console.log('Delete user:', userId);
  }

  markFavourite(userId: number) {
    console.log('Marked favourite:', userId);
  }
}