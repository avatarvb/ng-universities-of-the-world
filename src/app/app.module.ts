import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { MapComponent } from "./components/map/map.component";
import { UniversitiesComponent } from "./components/universities/universities.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    MapComponent,
    UniversitiesComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
