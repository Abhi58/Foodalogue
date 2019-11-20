import { Injectable, Output } from '@angular/core';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  name: string;
  userId: any;
  favoritesData: any;

  constructor(private user: UserService, private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json', 'Access-Control-Allow-Origin' : '*' }),
    };

  setName(str) {
    this.name = str;
  }

  getName() {
    return this.name;
  }
  
    saveFavorite(restaurantUrl, restaurantThumb,restaurantCuisine,restaurantName, restaurantAddress, userRating, ratingText, currency, price, restaurantMenuUrl) {
      this.userId = this.getName();
      return this.http.post(environment.favoritesUrl, {'user_id': this.userId, 'restaurant_url': restaurantUrl, 'restaurant_thumb': restaurantThumb, 'restaurant_cuisine': restaurantCuisine, 'restaurant_name': restaurantName, 'restaurant_address': restaurantAddress, 'user_rating': userRating, 'rating_text': ratingText, 'currency': currency, 'price': price, 'restaurant_menu_url': restaurantMenuUrl }, this.httpOptions)//send post request
        .toPromise()
        .then((res) => res)
        .catch((err) => err.message);

      }

  getFavorites(userName) {
    return this.http.post(environment.usersFavoritesUrl, {user_id: userName}, this.httpOptions)
    .toPromise()
    .then((res) => res )
    .catch((err) => err.message);
  }


}
