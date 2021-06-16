import { NgModule } from "@angular/core";
import { WeatherComponent } from "./weather.component";
import { WeatherRoutingModule } from "./weather.routing.module";
import { WeatherMainCardComponent} from './weather-main-card/weather-main-card.component';
import { WeatherLeftBoxComponent} from './weather-left-box/weather-left-box.component';
import { WeatherLeftTempComponent} from './weather-left-temp/weather-left-temp.component';
import { WeatherLeftSunComponent} from './weather-left-sun/weather-left-sun.component';
import { WeatherServiceService} from '../_services/weather-service.service';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    WeatherComponent,
    WeatherMainCardComponent,
    WeatherLeftBoxComponent,
    WeatherLeftTempComponent,
    WeatherLeftSunComponent

  ],
  imports:[
    CommonModule,
    WeatherRoutingModule
  ],
  exports:[
    CommonModule
  ],
  providers: [
    WeatherServiceService
  ],
  entryComponents:[]
})
export class WeatherModule{

}
