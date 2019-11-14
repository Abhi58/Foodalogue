import { Component, OnInit, Input } from '@angular/core';

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


  constructor() {

   }

  ngOnInit() {
    this.visible = new Array(this.restaurantData.length).fill(true);
    this.save = new Array(this.restaurantData.length).fill(true);
  }

  saveRestaurant(restaurant, index) {
    console.log(restaurant);
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
