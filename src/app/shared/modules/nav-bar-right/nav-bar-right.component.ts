import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-right',
  templateUrl: './nav-bar-right.component.html',
  styleUrls: ['./nav-bar-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
