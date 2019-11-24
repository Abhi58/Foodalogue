import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})
export class NavComponent implements OnInit{

  loggedIn = false;
  account_disp =true;
  user:any;
  user_id: any;


  constructor(private userService: UserService, private favorite: FavoritesService, private router: Router, private matSnackBar: MatSnackBar) {

  }

  ngOnInit(){
    this.userService.getEmitter().subscribe((data) => {
      
      if (data.length === 1){
        this.loggedIn = true;
        this.account_disp = false;
        this.user = data[0].user_first_name;
        this.user_id = data[0].user_name;
        this.favorite.setName(this.user_id);
        this.userService.isLoggedIn = true;
        
      }

      else {
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




