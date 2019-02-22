import Moment from 'moment';
import 'moment/locale/es';
import TransformWeather from './transformWeather';

const transformForeCast = (data) => {

    const filterdata = data.list.filter((item) => {
        return (
            Moment.unix(item.dt).hour() === 6 ||
            Moment.unix(item.dt).hour() === 12 ||
            Moment.unix(item.dt).hour() === 18 
        );
    }).map((item) => {
        return {
            weekDay: Moment.unix(item.dt).format('ddd'),
            hour: Moment.unix(item.dt).hour(),
            data: TransformWeather(item)
        }
    });
    
    console.log('filter data ');
    console.log(filterdata);

    return filterdata;
}

export default transformForeCast;