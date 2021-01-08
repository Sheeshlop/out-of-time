import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-estimate-input',
	templateUrl: './estimate-input.component.html',
	styleUrls: ['./estimate-input.component.scss']
})
export class EstimateInputComponent implements OnInit {

	hours = 0;
	minutes!: number;

	constructor() { }

	ngOnInit(): void {
	}

	estimate(type: 'hours' | 'minutes', value: number): void {
		if (type === 'minutes' && value >= 30) {
			for (; this.minutes >= 30;) {
				this.minutes -= 30;
				this.hours += 1;
			}
		}
		console.log(type, value);
	}

}
