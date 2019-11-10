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

}
