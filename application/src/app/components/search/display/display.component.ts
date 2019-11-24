import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { UserService } from 'src/app/services/user.service';
import { Favorites } from 'src/app/models/favorites';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() restaurantData: any;
  visible: boolean[];
  save: boolean[];
  map: any;
  searchManager: any;
  name: string;
  address: string;
  restaurantUrl: any; restaurantThumb: any; restaurantCuisine: any; restaurantName: any;
  restaurantAddress: any; userRating: any; currency: any;
  restaurantMenuUrl: any; ratingText: any; price: any;
  loggedIn: boolean;


  constructor(private favorite: FavoritesService, private userService: UserService) {

   }

  ngOnInit() {
    this.visible = new Array(this.restaurantData.length).fill(true);
    this.save = new Array(this.restaurantData.length).fill(true);

    if(this.userService.isLoggedIn === true){
      this.loggedIn = true;
    } else{
      this.loggedIn = false;
    }


  }

  saveRestaurant(restaurant, index) {
    this.restaurantUrl = restaurant.restaurant.url;
    this.restaurantName = restaurant.restaurant.name;
    this.restaurantThumb = restaurant.restaurant.featured_image;
    this.restaurantAddress = restaurant.restaurant.location.address;
    this.restaurantCuisine = restaurant.restaurant.cuisines;
    this.userRating = restaurant.restaurant.user_rating.aggregate_rating;
    this.ratingText = restaurant.restaurant.user_rating.rating_text;
    this.restaurantMenuUrl = restaurant.restaurant.menu_url;
    this.currency = restaurant.restaurant.currency;
    this.price = restaurant.restaurant.average_cost_for_two;


    this.favorite.saveFavorite(this.restaurantUrl, this.restaurantThumb, this.restaurantCuisine, this.restaurantName, this.restaurantAddress, this.userRating, this.ratingText, this.currency, this.price, this.restaurantMenuUrl);

    this.visible = this.visible.map((value, i) => {
          if (i === index) {
            return false;
          } else {
            return true;
          }
        });
    this.save[index] = this.visible[index];

  }

  goToMaps(restaurant) {
    this.name = restaurant.restaurant.name;
    this.address = restaurant.restaurant.location.address;
    window.location.href = 'https://www.google.com/maps/search/?api=1&query=' + this.name + ',' + this.address;
  }


}
