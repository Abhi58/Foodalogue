import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  restaurants: any;
  list = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  fetchRestaurants(formData) {
    this.restaurants = [];
    this.searchService.getRestaurants(formData.city, formData.cuisine).then(
      (data) => {
        if (data != null) {
          this.restaurants = data;
          this.list = true;
          console.log(this.list);
          console.log(this.restaurants);
          //console.log(this.restaurants[0].restaurant.R.res_id);
        } else {
          alert('Enter Valid Details');
        }
    });
  }

}
