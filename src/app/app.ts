import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WeatherData {
  name: string;
  main: { temp: number; feels_like: number; humidity: number; pressure: number };
  weather: Array<{ description: string; icon: string }>;
  wind: { speed: number };
  sys: { country: string };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  title = 'Weather Angular EIT';
  cityName: string = 'Dakar';
  weatherData: WeatherData | null = null;
  loading = false;
  error = '';
  apiKey = 'YOUR_API_KEY_HERE';

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.loading = true;
    this.error = '';

    setTimeout(() => {
      this.loading = false;
      this.weatherData = {
        name: 'Dakar',
        main: { temp: 28.5, feels_like: 32.1, humidity: 78, pressure: 1012 },
        weather: [{ description: 'Ciel dégagé', icon: '01d' }],
        wind: { speed: 3.5 },
        sys: { country: 'SN' }
      };
    }, 1000);
  }

  get weatherTemp(): number {
    return this.weatherData ? Math.round(this.weatherData.main.temp) : 0;
  }

  get feelsTemp(): number {
    return this.weatherData ? Math.round(this.weatherData.main.feels_like) : 0;
  }
}
