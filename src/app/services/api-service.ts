import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
 export class APIService {
 
 private baseUrl: string = 'https://swapi.tech/api/'
 
 constructor(private http: HttpClient) {}
 
 
get(endpoint: string): Observable {
 
return this.http.get(${this.baseUrl}/${endpoint});
 }
 


 }

