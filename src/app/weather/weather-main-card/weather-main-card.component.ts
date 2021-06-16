import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/_intefaces/weather.interface';

@Component({
  selector: 'gm-weather-main-card',
  templateUrl: './weather-main-card.component.html',
  styleUrls: ['./weather-main-card.component.scss']
})
export class WeatherMainCardComponent implements OnInit {

  @Input() weatherResult!: Weather;

  today = new Date();

  photo = 'https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';

  constructor() { }

  ngOnInit(): void {

  }

}
