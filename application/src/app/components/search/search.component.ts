import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  restaurants: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  fetchRestaurants(formData) {
    console.log(formData);
    this.restaurants = [];
    this.searchService.getRestaurants(formData.city, formData.cuisine).then(
      (data) => {
          this.restaurants = data;
          console.log(this.restaurants);
      });
  }

}
