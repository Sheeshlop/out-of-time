import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header.component';
import { NavHeaderRoutingModule } from './nav-header.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavHeaderRoutingModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class NavHeaderModule { }
