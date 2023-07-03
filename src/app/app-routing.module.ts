import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetComponent} from "./Components/Planet/Planet.component";
import {PlanetsComponent} from "./Components/Planets/Planets.component";

const routes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/:id',component: PlanetComponent},
  {path: '**', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
