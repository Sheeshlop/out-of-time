import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackerComponent } from './time-tracker.component';
import { EstimateInputComponent } from './estimate-input/estimate-input.component';
import { ControlsComponent } from './controls/controls.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TimeModule } from 'src/app/pipes/time/time.module';

@NgModule({
  declarations: [
    TimeTrackerComponent,
    EstimateInputComponent,
    ControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TimeModule
  ],
  exports: [
    TimeTrackerComponent,
    EstimateInputComponent,
    ControlsComponent,
  ]
})
export class TimeTrackerModule { }
