import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-researchphase',
  templateUrl: './researchphase.component.html',
  styleUrls: ['./researchphase.component.css']
})
export class ResearchphaseComponent   {
constructor(private location:Location){}
onclick(){
  this.location.back();
}
}
