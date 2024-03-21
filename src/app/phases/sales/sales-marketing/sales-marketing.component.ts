import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sales-marketing',
  templateUrl: './sales-marketing.component.html',
  styleUrls: ['./sales-marketing.component.css']
})
export class SalesMarketingComponent {
constructor(private location:Location){}
onclick(){
  this.location.back();
}
}
