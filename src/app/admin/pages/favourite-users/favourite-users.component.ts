import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-users',
  templateUrl: './favourite-users.component.html',
  styleUrls: ['./favourite-users.component.scss']
})
export class FavouriteUsersComponent {
  favouriteUsers = [
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
}