import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ `Cº` }</span>
    </div>
);

const getWeatherIcon = (weatherState) =>
{
    let icon = icons[weatherState];
    const sizeIcon = "4x";
    icon = (icon == null) ? icons.SUN : icon;
    return <WeatherIcons name={icon} className="wicon" size={sizeIcon}></WeatherIcons>;
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
