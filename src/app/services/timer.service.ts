import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { IIssue } from '../interfaces/github/issue.interface';
import { ITrackerTime } from '../interfaces/time-tracker/time-tracker.interface';

@Injectable({
	providedIn: 'root'
})
export class TimerService {

	public readonly activeTrackingIssue = new BehaviorSubject<IIssue | undefined>(undefined);

	private readonly timer = timer(1000, 1000);
	private track!: Subscription;


	startTracking(activeIssue: IIssue): Observable<ITrackerTime> {
		return new Observable((subscriber) => {
			this.track = this.timer.subscribe(() => {
				activeIssue.trackedTime.seconds++;
				if (activeIssue.trackedTime.seconds === 60) {
					activeIssue.trackedTime.seconds = 0;
					activeIssue.trackedTime.minutes += 1;
				}
				if (activeIssue.trackedTime.minutes === 60) {
					activeIssue.trackedTime.minutes = 0;
					activeIssue.trackedTime.hours += 1;
				}
				subscriber.next();
				this.activeTrackingIssue.next(activeIssue);
			});
		});
	}

	pauseTracking(activeIssue: IIssue): void {
		this.track.unsubscribe();
	}
}
