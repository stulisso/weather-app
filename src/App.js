import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForeCastExtender from './components/ForeCastExtender'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const cities = ['Sunchales,ar', 'Cordoba,ar', 'Havana,cu', 'London,uk', 'Washington,us']

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: null
    }
  }

  handleSelectionLocation = city => {
    console.log('APP.js onSelectedLocation ' + city);
    this.setState({
      city: city
    });
  }
  
  render() {
    const { city } = this.state;
    return (
        <Grid>
            <Row>
              <Col xs={12} md={12}>
                <AppBar position='sticky'>
                  <Toolbar>
                    <Typography variant='title'>
                        Weather APP (Aplicación del clima)
                     </Typography> 
                  </Toolbar>
                </AppBar>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className="details">
                    { city && <ForeCastExtender city={city}></ForeCastExtender> }
                  </div>
                </Paper>
              </Col>
            </Row>
        </Grid>);
  }
}

export default App;
