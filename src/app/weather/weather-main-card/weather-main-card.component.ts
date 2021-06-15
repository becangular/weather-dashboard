import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gm-weather-main-card',
  templateUrl: './weather-main-card.component.html',
  styleUrls: ['./weather-main-card.component.scss']
})
export class WeatherMainCardComponent implements OnInit {

  @Input() city!: string;

  photo = 'https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';

  constructor() { }

  ngOnInit(): void {
  }

}
