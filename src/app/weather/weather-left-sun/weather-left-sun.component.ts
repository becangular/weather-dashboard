import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/_intefaces/weather.interface';

@Component({
  selector: 'gm-weather-left-sun',
  templateUrl: './weather-left-sun.component.html',
  styleUrls: ['./weather-left-sun.component.scss']
})
export class WeatherLeftSunComponent implements OnInit {

  @Input() weatherResult!: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
