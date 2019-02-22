import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    
    const handleWeatherLocationClick = (city) => {
        console.log('LocationList.js handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const getWeatherLocationList = (cities) => {
        return cities.map(city => 
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} />);
    }

    return (
        <div className="locationList">
            { getWeatherLocationList(cities) }
            {/* cities.map(city => <WeatherLocation key={city} city={city} />) */}
            {/* 
            LAS LISTAS DE COMPONENTES NECEISTAN KEY, para no perjudicar el render
            <WeatherLocation city="Sunchales,ar" />
            <WeatherLocation city="Cordoba,ar" />
            <WeatherLocation city="Havana,cu" />
            <WeatherLocation city="London,uk" /> */}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;