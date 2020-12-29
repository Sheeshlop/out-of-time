import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackerComponent } from './time-tracker.component';
import { ControlsComponent } from './controls/controls.component';
import { EstimateInputComponent } from './estimate-input/estimate-input.component';



@NgModule({
  declarations: [TimeTrackerComponent, ControlsComponent, EstimateInputComponent],
  imports: [
    CommonModule
  ]
})
export class TimeTrackerModule { }
