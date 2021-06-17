export interface Weather {
  lon: number;
  lat: number;
  main: string;
  description: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  country: string;
  name: string;
  speed: number;
  deg: number;
  gust: number;
  cloudall: number;
}
