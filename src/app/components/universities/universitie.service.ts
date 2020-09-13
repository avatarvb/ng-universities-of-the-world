import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { Universitie } from "./universitie.model";
import { throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class Universities {
  private listUniversities: Universitie[] = [];

  constructor(private http: HttpClient) {}

  fetchUniversities(params) {
    return this.http
      .get("http://universities.hipolabs.com/search?country=" + params.country)
      .pipe(
        map(
          (data) => {
            return data;
          },
          catchError((e: any) => {
            //do your processing here
            return throwError(e);
          })
        )
      );
  }
}
