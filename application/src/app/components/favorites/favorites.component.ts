import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesData: any;
  userId: any;
  constructor(private favorite: FavoritesService) { 

  }


  ngOnInit() {
      this.userId = this.favorite.getName();
      this.favorite.getFavorites(this.userId).then(
        (data: any) => {
          if (data != null) {
            this.favoritesData = data;
            console.log(data);
          }
        });
  }



}
