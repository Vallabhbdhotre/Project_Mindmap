import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-demanufacturing',
  templateUrl: './demanufacturing.component.html',
  styleUrls: ['./demanufacturing.component.css']
})
export class DemanufacturingComponent {
constructor(private location:Location){}
onclick(){
  this.location.back();
}
}
