import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-welcome-search',
  templateUrl: './welcome-search.component.html',
  styleUrls: ['./welcome-search.component.scss']
})
export class WelcomeSearchComponent implements OnInit {

  city: string = '';


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  getCity(city:string): void {
    this.city = city;
    this.router.navigate(['weather',{city: this.city }]);
  }

}
