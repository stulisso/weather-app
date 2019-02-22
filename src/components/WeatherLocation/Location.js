import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {
    //const city = props.city;
    
    //destructuring 
    //const { city } = props;
    //Llevo la desestructuracion al parametro

    return (
        <div className="locationCont">
            <h1>
                { city }
            </h1>
        </div>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;