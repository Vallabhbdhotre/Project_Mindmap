import { Component, OnInit } from '@angular/core';
import { ComponentsinfoService } from '../componentsinfo.service';

@Component({
  selector: 'app-b2c1',
  templateUrl: './b2c1.component.html',
  styleUrls: ['./b2c1.component.css'],
})
export class B2c1Component implements OnInit {
  constructor(private dataservice: ComponentsinfoService) {}
  components_data: any = {};
  componentInfo: any = '';
  displaystatus:boolean=false;
  ngOnInit(): void {
    this.components_data = this.dataservice.componentdata;
  }
  showInfo(componentName: string) {
    this.displaystatus=true;
    switch (componentName) {
      case 'online':
        this.componentInfo =this.components_data.online;
        break;
      case 'interview':
        this.componentInfo=this.components_data.interview;
        break;
      case 'health':
        this.componentInfo=this.components_data.health;
        break;
      case 'public_data':
        this.componentInfo=this.components_data.public_Data;
        break;
      default:
       this.componentInfo='';
    }
  }
  hideinfo(){
    this.displaystatus=false
  }
}
