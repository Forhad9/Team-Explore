import React, { useEffect, useState } from 'react';


import TeamData from '../TeamData/TeamData';
import image1 from '../../Photo/banner.jpg';

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
      <div style={{backgroundImage: `url(${image1}`,backgroundSize:"cover",height:"60vh", color:"white",position:"relative" }}>
        <h1 style={{position:"absolute",top:"50%",left:"45%"}}>Team Explore</h1>
      </div>
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