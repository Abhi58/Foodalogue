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

  fetchRestaurants() {
    this.restaurants=[];
    this.searchService.getRestaurants().subscribe(
      (data: any[])=> {
        console.log(data);
          this.restaurants = data;
          console.log(this.restaurants);
      });
  }

}
