import React, { useEffect, useState } from 'react';
import TeamData from '../TeamData/TeamData';

const Home = () => {
    const [team, setTeam] = useState([]);
    const first9 = team.slice(0, 9);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
      <div style={{backgroundColor:"#16213e"}}>
      <div className="container">
      <div className="row">
          {
              first9.map(td => <TeamData td={td}></TeamData>)
          }
      </div>
  </div>
      
      </div>
    );
};

export default Home;