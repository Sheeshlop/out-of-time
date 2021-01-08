import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { TimerService } from 'src/app/services/timer.service';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent implements OnInit {

	trackingTime = false;
	@Input() activeIssue!: IIssue;
	track$!: Subscription;

	constructor(private changeDetector: ChangeDetectorRef, private timerService: TimerService) { }

	ngOnInit(): void {
	}

	track(): void {
		this.trackingTime ? this.pause(this.activeIssue) : this.start(this.activeIssue);
		this.trackingTime = !this.trackingTime;
	}

	start(activeIssue: IIssue): void {
		this.track$ = this.timerService.startTracking(activeIssue).subscribe(() => {
			this.changeDetector.detectChanges();
		});
	}

	pause(activeIssue: IIssue): void {
		this.timerService.pauseTracking(activeIssue);
	}

}
