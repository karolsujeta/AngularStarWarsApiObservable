import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataInterface } from './data-interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  api = "https://swapi.co/api/planets/3/";

  downloadData(): Observable<DataInterface[]> {
    return this.http
      .get(this.api)
      .pipe(
        map((data: any[]) =>
          [data].map(
            (item: any) =>
              new DataInterface(item.name, item.population, item.climate)
          )
        )
      );
  }
}
