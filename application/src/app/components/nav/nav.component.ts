import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})
export class NavComponent implements OnInit{
  loggedIn = false;
  account_disp =true;
  user:any;
  constructor(private userService: UserService, private favorite: FavoritesService) {

  }

  ngOnInit(){
    this.userService.getEmitter().subscribe((data) => {
      console.log("Component is notified of successfull login!");
      console.log(data);
      
      
      if (data.length === 1){
        this.loggedIn = true;
        this.account_disp = false;
        this.user = data[0].user_first_name;
        this.favorite.setName(this.user);
        this.userService.isLoggedIn = true;
        
      }

      else {
        console.log("DATA is Null")
        this.user = null;
        this.userService.isLoggedIn = false;
      }
    });

  }
reset(){
  this.loggedIn = false;
  this.account_disp =true;
  this.userService.isLoggedIn = false;
}

}




