import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { ReactiveFormsModule } from "@angular/forms";




@Component({
  selector: 'bby-filter',
  imports: [MatButtonToggle, MatButtonToggleGroup, ReactiveFormsModule],
  template: `  
  <mat-button-toggle-group [formControl]="bbyFilter" aria-label="filter Birth year">
    <mat-button-toggle value="all">All</mat-button-toggle>
    <mat-button-toggle value="20-40">Birth Year 20 - 40</mat-button-toggle>
  </mat-button-toggle-group>
  `,
})

export class BBYFilter {
  bbyFilter = new FormControl('all');

// Output for emitting event, enables the parent to listening on changes in value
  @Output() filterChanged = new EventEmitter<any>();

  constructor() {
    
    this.bbyFilter.valueChanges.subscribe((value) => {
      this.filterChanged.emit(value);
    });
  }
}