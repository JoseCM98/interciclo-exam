import { Injectable } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url = 'https://spring-application-heroku.herokuapp.com/api/personas'
  private url2 = 'https://spring-application-heroku.herokuapp.com/api/persona'

  constructor(private http:HttpClient) { }
  listarPersonas(){
    return this.http.get<Persona[]>(this.url);
   }
   getPersona(com:string){
     return this.http.get<Persona[]>(`${this.url2}/${com}`)
   }
}
