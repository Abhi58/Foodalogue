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
  restaurant_url: any; restaurant_thumb: any; restaurant_cuisine: any; restaurant_name: any;
  restaurant_address: any; user_rating: any;
  restaurant_menu_url: any; rating_text: any;
  loggedIn: boolean;


  constructor(private favorite: FavoritesService, private userService: UserService) {

   }

  ngOnInit() {
    this.visible = new Array(this.restaurantData.length).fill(true);
    this.save = new Array(this.restaurantData.length).fill(true);

    if(this.userService.isLoggedIn == true){
      this.loggedIn = true;
    } else{
      this.loggedIn = false;
    }

    console.log(this.loggedIn);

  }

  saveRestaurant(restaurant, index) {
    this.restaurant_url = restaurant.restaurant.url;
    this.restaurant_name = restaurant.restaurant.name;
    this.restaurant_thumb = restaurant.restaurant.featured_image;
    this.restaurant_address = restaurant.restaurant.location.address;
    this.restaurant_cuisine = restaurant.restaurant.cuisines;
    this.user_rating = restaurant.restaurant.user_rating.aggregate_rating;
    this.rating_text = restaurant.restaurant.user_rating.rating_text;
    this.restaurant_menu_url = restaurant.restaurant.menu_url;

    this.favorite.saveFavorite(this.restaurant_url, this.restaurant_thumb, this.restaurant_cuisine, this.restaurant_name, this.restaurant_address, this.user_rating, this.rating_text, this.restaurant_menu_url).then(
      (data:any) => {
          
        if(data != null){
          console.log("Saved");
        } else {
          window.alert("Couldn't save data");
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
