import { Component, OnInit, Optional } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Universities } from "./universitie.service";
import { from } from "rxjs";

@Component({
  selector: "app-universities",
  templateUrl: "./universities.component.html",
  styleUrls: ["./universities.component.css"],
  // providers: [Universitie], injected @Injectable({ providedIn: "root" }) in the universitie.service
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("250ms", [
            animate(
              "1s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateY(-75px)",
                }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                }),
                style({
                  opacity: 1,
                  transform: "translateY(0px)",
                }),
              ])
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class UniversitiesComponent implements OnInit {
  public listUniversities: any = [];
  public country_name = "";
  isloading = false;
  state = "normal";

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private universitiesService: Universities
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isloading = true;
      this.country_name = params.country;
      this.universitiesService
        .fetchUniversities(params)
        .subscribe((universities) => {
          this.isloading = false;
          this.listUniversities = universities;
        });
    });
  }
}
