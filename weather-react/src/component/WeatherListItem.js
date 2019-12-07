import React, {Component}from 'react';
import './CurrentDay';
import './App.css';


class WeatherListItem extends Component {
  constructor (props){
    super(props);
    this.state={

    };
    this.onClick = this.onClick.bind(this);
  }


  onClick () {
    const { onDayClicked, index } = this.props;
    onDayClicked(index);
}
  render() {
    const { forecastDay } = this.props;
    const date = new Date(forecastDay.dt * 1000);
    const weekday = forecastDay.weekday;
    return (
        <div className="weather-list-item" onClick={this.onClick}>
            <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
            <h3>{weekday}</h3>
            <h3>{forecastDay.minTemp.toFixed(1)}&deg;F &#124; {forecastDay.maxTemp.toFixed(1)}&deg;F</h3>
        </div>
    );
  }
}


export default WeatherListItem;
