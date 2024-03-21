import { Component, OnInit } from '@angular/core';
import { ComponentsinfoService } from '../componentsinfo.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css']
})
export class PublicDataComponent implements OnInit {
  data:any;
constructor(private dataservice:ComponentsinfoService){}
ngOnInit(): void {
  this.data=this.dataservice.componentdata.public_Data
}
}

