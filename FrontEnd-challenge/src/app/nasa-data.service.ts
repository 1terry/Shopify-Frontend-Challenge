import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaDataService {

  // private nasa_url = https://api.nasa.gov/planetary/apod?api_key=scdYn3dgFcGwh5SahzO0vxEXLSg1Lasrs02QWVFn

  constructor(private http: HttpClient) { }

  getImages(){
    // return this.http.get(this.nasa_url);
  }

}
