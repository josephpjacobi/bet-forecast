import React, { useState } from 'react';
import scheduleData from './data/schedule-data';
import weatherData from './data/weather-data'
// [[{week: 1}, {}, {}], [{week: 2}, {}, {}]]
function App() {
  const [indexOfTheDataForCurrentWeek, setIndexOfTheDataForCurrentWeek] = useState(0);
  const displayButtons = scheduleData.map(week => <button onClick={() => setIndexOfTheDataForCurrentWeek(week[0].Week - 1)} key={week[0].Week}>Week {week[0].Week}</button>);
  const displayGames = scheduleData[indexOfTheDataForCurrentWeek].map(game => <div>{game.HomeTeam}</div>)
  const displayHourlyWeather = weatherData.map(hour => <div>{hour.condition.text} Temp: {hour.temp_f} Wind: {hour.wind_mph} Chance of Rain: {hour.chance_of_rain}</div>)
  console.log(scheduleData[indexOfTheDataForCurrentWeek]);
  console.log(weatherData);
  return (
    <div className="App">
      {indexOfTheDataForCurrentWeek}
      {displayButtons}
      {displayGames}
      {displayHourlyWeather}
    </div>
  );
}

export default App;
