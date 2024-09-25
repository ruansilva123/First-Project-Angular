import { Component, inject } from '@angular/core';
import { AboutService } from '../../services/about/about.service';
import { WeatherDatas } from '../../interfaces/weather-response';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  weatherService = inject(AboutService);
  weathers : WeatherDatas[] = [];

  ngOnInit(){
    this.showWeather();
  }

  showWeather(){
    this.weatherService.returnAllWeathers().subscribe({
      next:(weathers: WeatherDatas[])=>{
        this.weathers = weathers;
      }
    })
  }

  currentDate: string;

  constructor(){
    this.currentDate = this.getCurrentDateFormated();
  }

  getCurrentDateFormated(): string {
    return new Date().toISOString().split('T')[0];
  }
}
