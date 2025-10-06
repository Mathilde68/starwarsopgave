import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { ReactiveFormsModule } from "@angular/forms";




@Component({
  selector: 'gender-filter',
  imports: [MatButtonToggle, MatButtonToggleGroup, ReactiveFormsModule],
  template: `  
  <mat-button-toggle-group [formControl]="genderFilter" aria-label="filter gender">
    <mat-button-toggle value="all">All</mat-button-toggle>
    <mat-button-toggle value="female">Female</mat-button-toggle>
    <mat-button-toggle value="male">Male</mat-button-toggle>
  </mat-button-toggle-group>
  `,
})

export class GenderFilter {
  genderFilter = new FormControl('all');

  // Output for emitting event, enables the parent to listening on changes in value
  @Output() filterChanged = new EventEmitter<any>();

  constructor() {
    
    this.genderFilter.valueChanges.subscribe((value) => {
      this.filterChanged.emit(value);
    });
  }
}