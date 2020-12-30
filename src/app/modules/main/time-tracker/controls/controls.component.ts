import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  track(): void {
    this.active = !this.active;
  }

}
