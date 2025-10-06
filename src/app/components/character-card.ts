import { Component, Input} from "@angular/core";
import { Character } from "../models/character.model";
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";





@Component({
  selector: 'character-card',
  imports: [MatCard, MatCardHeader, MatCardTitle,  MatCardContent],
  template: `  
  <mat-card appearance='filled'>
    <mat-card-header>
    <mat-card-title>{{ character.name }}</mat-card-title>
    </mat-card-header>
      <mat-card-content>
        <p class="{{character.details.gender}}">{{ (character.details.gender).toUpperCase() }}</p>
        <p>Birth year: {{ character.details.birth_year }}</p>
        <p>Height: {{ character.details.height }}</p>
        <p>Mass: {{ character.details.mass }}</p>
      
        
      </mat-card-content>
    
  </mat-card>
  `,
})

export class CharacterCard  {
  //Getting the Character as Input from list component (parent)
 @Input() character!: Character;



 
}
