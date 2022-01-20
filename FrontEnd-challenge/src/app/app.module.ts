import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
// export class app{
//   constructor {
//     public date: string,
//     public start_date: string,
//     public end_date: string,
//     public count: int,
//     public thumbs: number,
//     public api_key: string,
 
//   }
// }



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
