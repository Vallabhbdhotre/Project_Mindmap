import { Component, OnInit } from '@angular/core';
import { ComponentsinfoService } from '../componentsinfo.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  data:any;
constructor(private dataservice:ComponentsinfoService){}
ngOnInit(): void {
  this.data=this.dataservice.componentdata.interview;
}
}
