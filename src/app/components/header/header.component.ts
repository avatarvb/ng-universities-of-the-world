import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Countries } from "../countries/countrie.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [Countries],
})
export class HeaderComponent implements OnInit {
  public keyword = "name";
  public keywords = ["name", "capital", "region"];

  public data$: Observable<any[]>;
  constructor(
    private countriesDataServ: Countries,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getData();
  }

  getData(): void {
    this.data$ = this.countriesDataServ.fetchCountries();
  }
  selectEvent(item) {
    console.log(item.name);

    this.router.navigate(["/universities/" + item.name]);
    // console.log("http://universities.hipolabs.com/search?country=" + item.name);
  }

  onFocused(e) {
    // do something when input is focused
    // console.log(e.val);
  }

  ngOnInit(): void {}
}
