import { url_base_forecast, api_key }  from './../constants/api_urls';

const getUrlWeatherForeCast = (city) => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}&units=metric`;
}

export default getUrlWeatherForeCast;