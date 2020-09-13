import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UniversitiesComponent } from "./components/universities/universities.component";
import { MapComponent } from "./components/map/map.component";

const routes: Routes = [
  { path: "", redirectTo: "/map", pathMatch: "full" },
  { path: "map", component: MapComponent },
  { path: "universities/:country", component: UniversitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
