import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesData: any;
  userId: any;
  name: any;
  address: any;
  loggedIn = false;

  constructor(private favorite: FavoritesService, private user: UserService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
      this.userId = this.favorite.getName();
      if (this.user.isLoggedIn === true) {
        this.loggedIn = this.user.isLoggedIn;
      }
      this.favorite.getFavorites(this.userId).then(
        (data: any) => {
          if (data != null) {
            this.favoritesData = data;
          }
          if (data === null) {
            this.favoritesData = true;
          }
        });
  }

  goToMaps(restaurant) {
    this.name = restaurant.restaurant_name;
    this.address = restaurant.restaurant_address;
    window.location.href = 'https://www.google.com/maps/search/?api=1&query=' + this.name + ',' + this.address;
  }

  removeFav(restaurant) {
    this.userId = this.favorite.getName();
    this.name = restaurant.restaurant_name;
    this.favorite.deleteFavorite(this.userId, this.name).then(
      (data: any) => {
          console.log(data);

      });
  }
}
