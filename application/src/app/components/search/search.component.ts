import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  city = 291;
  cuisine = 'Asian';
  restaurants: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  fetchRestaurants(formData) {
    console.log(formData);
    this.restaurants=[];
    this.searchService.getRestaurants(this.city,this.cuisine).subscribe(
      (data)=> {
          this.restaurants = data;
          console.log(this.restaurants);
      });
  }

}
