import { Component, OnInit, Output } from "@angular/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError, of } from "rxjs";
import { APIService } from "../services/api-service";
import { Character } from "../models/character.model";
import { CharacterCard } from "./character-card";
import { GenderFilter } from "./gender-filter";
import { BBYFilter } from "./BBY-filter";


@Component({
  selector: 'character-list',
  imports: [CharacterCard, MatProgressSpinnerModule, GenderFilter, BBYFilter],
  template: `
  <section class='filter-section'>
  <p>Filter by Gender:</p>
  <gender-filter (filterChanged)="onGenderFilterChanged($event)"></gender-filter>
  <p>Filter by Birth year:</p>
  <bby-filter (filterChanged)="onBBYFilterChanged($event)"></bby-filter>
 </section>
    <h2>List of StarWars characters</h2>
    
    <section class='character-list'>
    @if (loading){
      <p>Loading list</p>
          <mat-spinner  [diameter]="30" /> 
     }@else {
       @for (character of filteredCharacters; track character.uid) {
          <character-card [character]="character" class="card-container"></character-card> 
        }
     } 
      
    </section>
  `,
})
export class CharacterList implements OnInit {
 loading = true;
  characterIds: Character[] = [];
  characters: Character[] = [];
  filteredCharacters: Character[] = [];

  constructor(private apiService: APIService) { }


  // Filtering for genders
  onGenderFilterChanged(gender: string) {

    if (gender == "all") {
      this.filteredCharacters = this.characters;
    } else {
       this.filteredCharacters = this.characters.filter(char => 
       char.details?.gender === gender );
    }

  }


  // Filtering between birth year 20 - 40
   onBBYFilterChanged(filter: string) {

    if (filter == 'all') {
      this.filteredCharacters = this.characters;
    } else {
       this.filteredCharacters = this.filteredCharacters.filter(char => 
       char.details?.birth_year > '20BBY' && char.details?.birth_year < '40BBY');
    }

  }


  ngOnInit() {
    //Subscribe to the getAll to get all uid's
    this.apiService.getAll().subscribe((data) => {
      this.characterIds = data.results;
      
      // Using these uids in for loop to get more details for each character
      for (const char of this.characterIds) {
        this.apiService.get(char.uid).subscribe((data) => {
          const details = data.result.properties;

         
          // adding the details to the character
          const fullCharacter: any = {
            ...char,
            details: details,
          };
          this.characters.push(fullCharacter);

          // For stopping the loading spinner
          this.loading=false;

          //Put the chatracters in filtercharacters, in order to display
          this.filteredCharacters = this.characters;
        });
      }
    });
  }
}
