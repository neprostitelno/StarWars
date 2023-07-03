import {Component} from "@angular/core";
import {IPlanets} from "../../Models/PlanetsModel";
import {PlanetsService} from "../../Services/planets.service";
import {ActivatedRoute} from "@angular/router";
import {IPlanet} from "../../Models/PlanetModel";
import {IPeople} from "../../Models/PeopleModel";

@Component({
  selector: 'app-planet',
  templateUrl: 'Planet.component.html',
  styleUrls: ['Planet.component.css']
})
export class PlanetComponent {
  id: number
  planet: IPlanet
  people:IPeople
  allPeople:IPeople[] = []
  filterMale = true
  filterFemale = true
  male = 'male'
  isLoading = false

  constructor(public planetsServices:PlanetsService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.isLoading = true
    this.planetsServices.getPlanet(this.id).subscribe(res => { {this.planet = res;
      for(let i = 0; i < this.planet.residents.length; i++){
        this.planetsServices.getPeople(this.planet.residents[i]).subscribe(res => {{this.allPeople.push(res)}; this.isLoading = false})
      }
    };  this.isLoading = false;})

  }
}
