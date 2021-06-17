import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiUrlBase: string = environment.apiWeather.urlSearch;
  private apiKey: string = environment.apiWeather.key;

  constructor(private http: HttpClient) { }


  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrlBase + city}&appid=${this.apiKey}&units=metric`)
      .pipe(
        delay(1000),
        catchError(err => {
          return of({});
        }),

      );

  }


}
