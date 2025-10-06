import { Component, Input, OnInit, NgModule } from "@angular/core";
import { APIService } from "../services/api-service";
import { Character, CharacterDetails } from "../models/character.model";
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@Component({
  selector: 'character-card',
  imports: [MatCard, MatProgressSpinnerModule, MatCardHeader, MatCardTitle,  MatCardContent],
  template: `  
  <mat-card appearance='filled' style="width: 100%; min-width:20rem; height: 10rem;">
    <mat-card-header>
    <mat-card-title>{{ character.name }}</mat-card-title>
    </mat-card-header>
    @if (characterDetails) {
      <mat-card-content>
        <p>Gender: {{ characterDetails.gender }}</p>
        <p>Birth year: {{ characterDetails.birth_year }}</p>
        <p>Height: {{ characterDetails.height }}</p>
      </mat-card-content>
    } @else {
    <mat-spinner [diameter]="10" />

    }
  </mat-card>
  `,
})

export class CharacterCard implements OnInit {
  //Getting the Character as Input from list component (parent)
 @Input() character!: Character;
 // Setting up for getting the character detials
  characterDetails?: CharacterDetails;

  constructor(private apiService: APIService) {}

  // Getting needed details for the character using the uid, and my api service
  ngOnInit() {
    this.apiService.get(this.character.uid).subscribe((data) => {
      this.characterDetails = data.result.properties;
      console.log(this.characterDetails);
    });
  }


 
}
