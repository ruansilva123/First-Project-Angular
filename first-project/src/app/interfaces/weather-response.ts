export interface WeatherDatas {
    time : string,
    temperatureMax : number,
    temperatureMin : number
}


export interface WeatherResponse {
    daily: {
        time : string[],
        temperature_2m_max : number[],
        temperature_2m_min : number[]
    }
}