import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { WeatherDatas, WeatherResponse } from '../../interfaces/weather-response';


@Injectable({
  providedIn: 'root'
})


export class AboutService {
  _http = inject(HttpClient);
  weatherApiUri = 'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&daily=temperature_2m_max,temperature_2m_min&timezone=America/Sao_Paulo';

  returnAllWeathers() {
    return this._http.get<WeatherResponse>(this.weatherApiUri).pipe(
      map(resp => {
        return resp.daily.time.map((time, index) => ({
          time: time,
          temperatureMax: resp.daily.temperature_2m_max[index],
          temperatureMin: resp.daily.temperature_2m_min[index]
        })) as WeatherDatas[]
      })
    );
  }
}
