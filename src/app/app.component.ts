import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleProject';
  
  constructor(private router:Router){}
  matButton(){
    this.router.navigate(['matForm']);
   
  }
  Button(){
    this.router.navigate(['Form']);
  }
}
