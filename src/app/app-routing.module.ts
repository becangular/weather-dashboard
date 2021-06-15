import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeSearchComponent} from './welcome-search/welcome-search.component';



const routes: Routes = [
  {path: '', component: WelcomeSearchComponent},
  {path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)},
  {path: '**', component: WelcomeSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
