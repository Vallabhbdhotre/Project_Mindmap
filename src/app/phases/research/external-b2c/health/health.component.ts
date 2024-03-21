import { Component, OnInit } from '@angular/core';
import { ComponentsinfoService } from '../componentsinfo.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  data:any;
constructor(private dataservice:ComponentsinfoService){}
ngOnInit(): void {
  this.data=this.dataservice.componentdata.health;
}
}
