import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header';
  userData:any={};
  getData(data:any){
    console.warn(data)
    this.userData=data
  }
}
