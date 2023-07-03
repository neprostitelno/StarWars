import {Injectable} from "@angular/core";
import {IPlanets} from "../Models/PlanetsModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPlanet} from "../Models/PlanetModel";
import {IPeople} from "../Models/PeopleModel";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor(
    private http: HttpClient
  ) {
  }

  planets: IPlanets
  planet: IPlanet
  people: IPeople

  getPlanets(page: number): Observable<IPlanets> {
    return this.http.get<IPlanets>(`https://swapi.dev/api/planets/?page=${page}`)
  }

  getPlanet(id: number): Observable<IPlanet> {
    return this.http.get<IPlanet>(`https://swapi.dev/api/planets/${id}/`)
  }

  getPeople(url: string): Observable<IPeople>{
    return this.http.get<IPeople>(url)
  }
}
