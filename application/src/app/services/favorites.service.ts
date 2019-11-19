import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  name: string;
  userId: any;

  constructor(private user: UserService, private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json', 'Access-Control-Allow-Origin' : '*' }),
    };

  setName(str) {
    this.name = str;
  }

  getName() {
    return this.name;
  }

  saveFavorite(restaurant_url, restaurant_thumb,restaurant_cuisine,restaurant_name, restaurant_address, user_rating, rating_text, restaurant_menu_url) {
    this.userId = this.getName();

    return this.http.post(environment.favoritesUrl, {'user_id': this.userId, 'restaurant_url': restaurant_url, 'restaurant_thumb': restaurant_thumb, 'restaurant_cuisine': restaurant_cuisine, 'restaurant_name': restaurant_name, 'restaurant_address': restaurant_address, 'user_rating': user_rating, 'rating_text': rating_text, 'restaurant_menu_url': restaurant_menu_url }, this.httpOptions)//send post request
      .toPromise()
      .then((res) => res )
      .catch((err) => err.message);

  }
}
