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
  list = false;
  restaurants = Array;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  fetchRestaurants(formData) {

    this.searchService.getRestaurants(formData.city, formData.cuisine).then(
      (data) => {
        if (data != null) {
          this.list = true;
          console.log(data);
          this.restaurants = data;
        } else {
          this.restaurants = null;
        }
    });
  }

}
