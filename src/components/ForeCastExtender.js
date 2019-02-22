import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
import GetUrlWeatherForeCast from './../services/getUrlWeatherForeCast';
import TransformForeCast from './../services/transformForeCast';
import './styles.css';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
const data = {
    temperature: 50,  
    weatherState: 'SUN',
    humidity: 100,
    wind: '40 m/s',
};

class ForCastExtender extends Component {
    constructor(props){
        super(props); 
        this.state = {
            foreCastData: null,
        }
    }

    //LA primera vez que renderiza el componente
    componentDidMount() {
        this.updateCityExtender(this.props.city);
    }

    //Cuando se modifican las propiedades
    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city)
        {
            this.setState({foreCastData: null});
            this.updateCityExtender(nextProps.city);
        }
    }

    updateCityExtender = (city) => {
        const api_foreCast = GetUrlWeatherForeCast(this.props.city);
        fetch(api_foreCast).then( 
            data => (data.json()) //resultado del fetch y devolvemos un json con otra promesa
        ).then( 
            forecast_data => {
                console.log('resultado fore cast api');
                console.log(forecast_data);
                const data = TransformForeCast(forecast_data);
                console.log('resultado trasnformar');
                console.log(data);
                this.setState(
                    {
                        foreCastData: data
                    }
                );
        });
    }

    getItemsDays(foreCastData) {
        return (
            foreCastData.map(foreCastData => {
                return <ForeCastItem 
                    key={foreCastData.weekDay+foreCastData.hour}
                    weekDay={foreCastData.weekDay} 
                    hour={foreCastData.hour} 
                    data={foreCastData.data} />
            })
        );
    }

    renderProgress() {
        return <h3>Cargando pronostico extenendido ...</h3>;
    }

    render() {
        const city = this.props.city;
        const { foreCastData } = this.state;
        return (
            <div>
                <h2 className="forCastTitle">Pronóstico extendido: {city}</h2>
                { foreCastData ?
                    this.getItemsDays(foreCastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForCastExtender.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForCastExtender;