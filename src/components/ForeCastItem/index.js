import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForeCastItem = ({weekDay, hour, data }) => {
    return (
        <div>
            <h2>{weekDay} - {hour} hs</h2>
            <WeatherData data={data}></WeatherData>
        </div>
    );
}

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForeCastItem;