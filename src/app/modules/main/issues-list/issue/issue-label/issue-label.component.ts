import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ILabel } from 'src/app/interfaces/github/issue.interface';

@Component({
  selector: 'app-issue-label',
  templateUrl: './issue-label.component.html',
  styleUrls: ['./issue-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueLabelComponent implements OnInit {

  @Input() label!: ILabel;
  labelcolor = {};

  constructor() {}

  ngOnInit(): void {
    this.labelcolor = {
        color: `#${this.label.color}`,
        border: `1px #${this.label.color} solid`
    };
  }
}
