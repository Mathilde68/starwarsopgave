import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Character, CharacterDetails } from "../models/character.model";

@Injectable({providedIn: 'root'})
 export class APIService {
 
 private baseUrl: string = 'https://swapi.tech/api/people'
 
 constructor(private http: HttpClient) {}
 
 
  get(uid: string): Observable<{ result: { properties: CharacterDetails } }> {
    return this.http.get<{ result: { properties: CharacterDetails } }>(`${this.baseUrl}/${uid}`);
  }

getAll(): Observable<{ results: Character[] }> {
return this.http.get<any>(this.baseUrl);
 }


 
 }