import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Weather } from '../_intefaces/weather.interface';
import { WeatherServiceService } from '../_services/weather-service.service';

@Component({
  selector: 'gm-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]


})
export class WeatherComponent implements OnInit, OnDestroy {

  loading = false;
  city!: string;

  unsubscribe$: Subject<void> = new Subject<void>();

  weatherResult!: Weather;

  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.city = this.route.snapshot.paramMap.get('city') || '';
    this.weatherService.getWeather(this.city)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        if (Object.keys(res).length === 0) {
          this.weatherResult = res;
        } else {
          const weather: Weather = {
            lon: res.coord.lon,
            lat: res.coord.lat,
            main: res.weather[0].main,
            description: res.weather[0].description,
            icon: res.weather[0].icon,
            temp: res.main.temp,
            temp_min: res.main.temp_min,
            temp_max: res.main.temp_max,
            humidity: res.main.humidity,
            country: res.sys.country,
            name: res.name,
          };
          this.weatherResult = weather;
        }
        this.loading = false;
      });

  }

  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}
