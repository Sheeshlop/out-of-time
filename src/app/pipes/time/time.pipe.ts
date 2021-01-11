import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })

// Formats 4:5:3 to 04:05:03
export class TimePipe implements PipeTransform {
	transform(value: number | undefined): string {
		if (value) {
			if (value.toString().length === 1) {
				return '0' + value;
			} else {
				return value.toString();
			}
		} else {
			return '00';
		}
	}
}
