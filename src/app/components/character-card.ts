import { Component, Input, OnInit, NgModule } from "@angular/core";
import { APIService } from "../services/api-service";
import { Character, CharacterDetails } from "../models/character.model";
import { MatCard } from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@Component({
  selector: 'character-card',
  imports: [MatCard, MatProgressSpinnerModule],
  template: `  
  <mat-card appearance='outlined' style="width: 20rem;">
    <h1>{{ character.name }}</h1>
    @if (characterDetails) {
      <article>
        <p>{{ characterDetails.gender }}</p>
        <p>{{ characterDetails.birth_year }}</p>
      </article>
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
