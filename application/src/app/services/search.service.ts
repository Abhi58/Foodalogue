import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  headers = new HttpHeaders({'user-key':'2867cf6b1ecc191f2e2071b9c5cfd1f5'});
  data: any;

  constructor(private httpClient:HttpClient) { }

  public getRestaurants() {
    return this.httpClient.get(`https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&q=Asian&count=20`,
                    {headers: this.headers});
  }


}
