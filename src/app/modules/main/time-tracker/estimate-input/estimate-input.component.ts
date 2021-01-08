import { Component, Input, OnInit } from '@angular/core';
import { IIssue } from 'src/app/interfaces/github/issue.interface';

@Component({
	selector: 'app-estimate-input',
	templateUrl: './estimate-input.component.html',
	styleUrls: ['./estimate-input.component.scss']
})
export class EstimateInputComponent implements OnInit {

	@Input() activeIssue!: IIssue;

	public hours = 0;
	public minutes = 0;

	constructor() { }

	ngOnInit(): void {
	}

	estimate(type: 'hours' | 'minutes', value: number): void {
		console.log(type, value);
		if (type === 'minutes' && value >= 30) {
			for (; this.minutes >= 30;) {
				this.minutes -= 30;
				this.hours += 1;
			}
		}
	}

}
