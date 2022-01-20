import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NasaDataService } from '../nasa-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  li:any;
  lis=[];
  apiMap = new Map<number, string[]>();
  year = 2022;
  month = 1;
  day = 1; 
  range = 0;
  cardNum = 0;
  api_link = 'https://api.nasa.gov/planetary/apod?';
  api_date = 0
  api_key='api_key=scdYn3dgFcGwh5SahzO0vxEXLSg1Lasrs02QWVFn';
  full_api = '';
  Today = new Date();
  author = '';

  constructor(
    private http : HttpClient,
    private postData: NasaDataService
  ) { 
    this.range = 6;
    
    let apiMap = new Map<number, string[]>();
    this.day = this.Today.getDate() - 6;

  }

  ngOnInit(): void {
    for (let i = 0; i < this.range; i++){
      this.day = this.day + 1
      var dateFormat = this.year + "-" + this.month + "-" + this.day;
      this.full_api = this.api_link + "date=" + dateFormat + "&" + this.api_key; 
      console.log(this.full_api)     
      
      this.http.get<any>(this.full_api).subscribe(Response =>{

      console.log(Response);

      this.apiMap.set(i, [Response]);

        if(Response){
          hideloader();
        }
  
          this.li=Response;
          this.lis=this.li.list;

          useApiData(Response);
       
  
      });
  
      function hideloader(){
        let loaders = Array.from(document.getElementsByClassName('loading') as HTMLCollectionOf<HTMLElement>);
        loaders.forEach((element) =>  {
          element.style.visibility = "hidden";
        });
      }
      
      function useApiData(data: any){
        var content = '#content' + i;
        var image = 'image' + i;
        var title = '#title' + i;
        var date = '#date' + i;
        var author = '#user' + i;

        document.querySelector(content)!.innerHTML = data.explanation;
        (document.getElementById(image) as HTMLInputElement).src = data.hdurl;
        document.querySelector(title)!.innerHTML = data.title;
        document.querySelector(date)!.innerHTML = data.date;
        if (data.copyright != null){
          document.querySelector(author)!.innerHTML = data.copyright;
        }


        console.log(content);
        console.log(image);
        console.log(date);
        console.log(title);

      }

  
    
    }
   
}

likeButton(){
  // var buttonId = document.querySelector(id)!.innerHTML;
  console.log("liked");
  // if (buttonId = "♡"){
    // buttonId = "❤️";
  // }
}

}

