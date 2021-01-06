import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {

  active = false;

  tracker = {
    hours: 0,
    minutes: 0,
    seconds: 0 
  }

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    let source = timer(1000, 1000);
    source.subscribe(x => {
      this.tracker.seconds++;
      if (this.tracker.seconds === 60) {
        this.tracker.seconds = 0;
        this.tracker.minutes += 1;
      }
      if (this.tracker.minutes === 60) {
        this.tracker.minutes = 0;
        this.tracker.hours += 1;
      }
      this.changeDetector.detectChanges();
    })
  }

  track(): void {
    this.active = !this.active;
  }

}
