import { Injectable } from '@angular/core';
import { Observable, Subscribable, Subscriber, Subscription, timer } from 'rxjs';
import { IIssue } from '../interfaces/github/issue.interface';
import { ITrackerTime } from '../interfaces/time-tracker/time-tracker.interface';

@Injectable({
	providedIn: 'root'
})
export class TimerService {

	constructor() { }

	timer = timer(1000, 1000);
	track!: Subscription;

	startTracking(activeIssue: IIssue): Observable<ITrackerTime> {
		console.log('starting tracking time for', activeIssue);
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
			});
		});
	}

	pauseTracking(activeIssue: IIssue): void {
		console.log('paused timer, value: ', activeIssue.trackedTime);
		this.track.unsubscribe();
	}
}
