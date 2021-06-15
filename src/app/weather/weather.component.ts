import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gm-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  loading = false;
  city!:string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city')
    console.log(this.city)
  }



}
