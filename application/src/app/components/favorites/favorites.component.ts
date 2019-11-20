import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

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

  constructor(private favorite: FavoritesService) {

  }

  ngOnInit() {
      this.userId = this.favorite.getName();
      this.favorite.getFavorites(this.userId).then(
        (data: any) => {
          if (data != null) {
            this.favoritesData = data;
            console.log(data);
          }
        });
  }

  goToMaps(restaurant) {
    this.name = restaurant.restaurant_name;
    this.address = restaurant.restaurant_address;
    window.location.href = 'https://www.google.com/maps/search/?api=1&query=' + this.name + ',' + this.address;
  }



}
