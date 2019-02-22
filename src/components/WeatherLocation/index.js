import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import GetUrlWeatherByCity from './../../services/getUrlWeatherByCity';
//import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weathers';
import TransformWeather from './../../services/transformWeather';

import './styles.css';

/* 
const data = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 12,
    wind: '10 k/h'
}

const data2 = {
    temperature: 52,
    weatherState: SUN,
    humidity: 1000,
    wind: '100 k/h'
} */

//https://samples.openweathermap.org/data/2.5/weather?q=london&appid=b1b15e88fa797225412429c1c50c122a1

class WeatherLocation extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        }
    }

    componentDidMount(){
        console.log('did mount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update');
    }
    
/*     componentWillMount() {
        console.log('will mount DESCONTINUADO');
    }

    componentWillUpdate(){
        console.log('will update DESCONTINUADO');
    } */
    
    handleUpdateClick = () => {
        const api_weather = GetUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
                return resolve.json(); //resultado del fetch y devolvemos un json con otra promesa
            }).then( data => {
                console.log('resultado update click');
                console.log(data);
                const newWeather = TransformWeather(data);
                this.setState(
                    {
                        data: newWeather
                    }
                );
            });
        
        /*  console.log('click en boton');
            this.setState(
            {
                city: "Sunchales",
                data: data2
            }
        ) */
    }

    render (){
        console.log('render');
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                { data ?
                    <WeatherData data={data} /> :
                    <CircularProgress size={50} /> }     
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
