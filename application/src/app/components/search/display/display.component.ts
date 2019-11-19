import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { UserService } from 'src/app/services/user.service';

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
  restaurantAddress: any; userRating: any;
  restaurantMenuUrl: any; ratingText: any;
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
    this.ratingText = restaurant.restaurant.user_rating.ratingText;
    this.restaurantMenuUrl = restaurant.restaurant.menu_url;

    this.favorite.saveFavorite(this.restaurantUrl, this.restaurantThumb, this.restaurantCuisine, this.restaurantName, this.restaurantAddress, this.userRating, this.ratingText, this.restaurantMenuUrl).then(
      (data: any) => {

        if(data != null){

        } else {

        }

      });

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
