import { Component, OnInit } from '@angular/core';
import { ComponentsinfoService } from '../componentsinfo.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css'],
})
export class OnlineComponent implements OnInit {
  onlinedata: any = {};
  constructor(private dataService: ComponentsinfoService) {}
  ngOnInit(): void {
    this.onlinedata = this.dataService.componentdata.online;
  }
}
