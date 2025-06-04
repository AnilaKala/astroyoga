import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId: number = 0;
  user = { name: '', email: '', role: '', status: '' };
  isEdit = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    const editParam = this.route.snapshot.queryParamMap.get('edit');
    this.isEdit = editParam === 'true';

    // Simulate fetching user data
    this.user = {
      name: 'Sample User',
      email: 'sample@example.com',
      role: 'Regular',
      status: 'Active'
    };
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { edit: this.isEdit },
      queryParamsHandling: 'merge'
    });
  }

  updateUser() {
    console.log('Updated user:', this.user);
    this.toggleEdit();
  }

  deleteUser() {
    console.log('User deleted:', this.userId);
  }

  markFavourite() {
    console.log('User marked as favourite:', this.userId);
  }
}
