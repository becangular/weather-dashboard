import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/_intefaces/weather.interface';

@Component({
  selector: 'gm-weather-left-temp',
  templateUrl: './weather-left-temp.component.html',
  styleUrls: ['./weather-left-temp.component.scss']
})
export class WeatherLeftTempComponent implements OnInit {

  @Input() weatherResult!: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
