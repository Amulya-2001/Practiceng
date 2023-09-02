import { Component } from '@angular/core';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent {
  title='Data binding example using String Interpolation';
  numA:number=20;
  numB:number=10;
  /*addTwoNumbers(){
    return this.numA+this.numB;
  }*/
  title1="databinding using property building";
  imgLink="https://th.bing.com/th/id/OIP.QGx_o3-drUZiUDhKE0E-GAHaF-?w=190&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  onSave(x:MouseEvent){
    console.log("Save button is clicked!",x);
    
  }
  Url="https://github.com/Amulya-2001/Angular";

  fullName="Amaravathi Amulya";   
}
