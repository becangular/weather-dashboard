import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/_intefaces/weather.interface';

@Component({
  selector: 'gm-weather-left-box',
  templateUrl: './weather-left-box.component.html',
  styleUrls: ['./weather-left-box.component.scss']
})
export class WeatherLeftBoxComponent implements OnInit {

  @Input() weatherResult!: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
