import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  headers = new HttpHeaders({'user-key':'2867cf6b1ecc191f2e2071b9c5cfd1f5'});
  //url = https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${cuisine}&count=20;

  constructor(private httpClient:HttpClient) { }

  // public getRestaurants(cityName, cuisineName): Promise<void> {
  //   return this.httpClient.get(`https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
  //                   {headers: this.headers})
  //                   .toPromise()
  //                   .then(
  //                     (res)=> this.getAllRestaurants(res.location_suggestions[0].id,cuisineName)
  //                   );
  // }

  public getRestaurants(cityId, cuisine){
    return this.httpClient.get(` https://developers.zomato.com/api/v2.1/cities?q=Miami`,
                    {headers: this.headers})
                     .pipe(
                       map(res => res)
                     );
  }

}
