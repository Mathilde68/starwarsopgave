import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api-service";
import { Character } from "../models/character.model";
import { CharacterCard } from "./character-card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'character-list',
  imports: [CharacterCard, MatProgressSpinnerModule],
  template: `
 
    <h2>List of StarWars characters</h2>
    
    <section class='flex-list'>
      @for (character of characters; track character.uid) 
        {  @if (characters.length > 0){
          <character-card [character]="character"></character-card>}
         @else {
          <p>Loading list</p>
          <mat-spinner  [diameter]="30" />
        }
        }@empty {
          <p>There was no characters found</p>
        }
    </section>
  `,
})
export class CharacterList implements OnInit {


characters: Character[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe((data) => {
      this.characters = data.results;
      console.log(this.characters);
    });
  }
}
