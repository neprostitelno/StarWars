import {Component, Input} from "@angular/core";
import {IPlanets} from "../../Models/PlanetsModel";
import {PlanetsService} from "../../Services/planets.service";

@Component({
  selector: 'app-planets',
  templateUrl: './Planets.component.html',
  styleUrls: ['./Planets.component.css']
})
export class PlanetsComponent {
  planets: IPlanets
  pages: number[] = []
  isChangedBlock: any;

  constructor(public planetService: PlanetsService) {
  }


  ngOnInit(): void {
    this.getPlanetsPage(1)
  }

  getPlanetsPage(page: number): void {
    this.planetService.getPlanets(page).subscribe(res => {
        this.planets = res
        if (this.pages.length === 0) {
          for (let i = 1; i < ((this.planets.count - 1) / 10) + 1; i++) {
            this.pages.push(i)
          }
        }
      }
    )
  }
}
