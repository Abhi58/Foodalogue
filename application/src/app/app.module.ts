
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';


import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayComponent } from './components/search/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MapComponent } from './components/map/map.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorites.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    FooterComponent,
    DisplayComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RatingModule.forRoot()
  ],
  providers: [SearchService, FavoritesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

