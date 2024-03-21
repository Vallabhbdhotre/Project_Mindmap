import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-planningphase',
  templateUrl: './planningphase.component.html',
  styleUrls: ['./planningphase.component.css']
})
export class PlanningphaseComponent   {
constructor(private location:Location){}
onclick(){
this.location.back();
}
}
