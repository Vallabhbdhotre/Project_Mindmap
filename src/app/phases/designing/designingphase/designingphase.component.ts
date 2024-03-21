import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-designingphase',
  templateUrl: './designingphase.component.html',
  styleUrls: ['./designingphase.component.css'],
})
export class DesigningphaseComponent {
  constructor(private location: Location) {}
  onclick() {
    this.location.back();
  }
}
