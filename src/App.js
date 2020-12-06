import React, { useState } from 'react';
import scheduleData from './data/schedule-data';
// [[{week: 1}, {}, {}], [{week: 2}, {}, {}]]
function App() {
  const [indexOfTheDataForCurrentWeek, setIndexOfTheDataForCurrentWeek] = useState(0);
  const displayButtons = scheduleData.map(week => <button onClick={() => setIndexOfTheDataForCurrentWeek(week[0].Week - 1)} key={week[0].Week}>Week {week[0].Week}</button>);
  const displayGames = scheduleData[indexOfTheDataForCurrentWeek].map(game => <div>{game.HomeTeam}</div>)
  console.log(scheduleData[indexOfTheDataForCurrentWeek]);
  return (
    <div className="App">
      {indexOfTheDataForCurrentWeek}
      {displayButtons}
      {displayGames}
    </div>
  );
}

export default App;
