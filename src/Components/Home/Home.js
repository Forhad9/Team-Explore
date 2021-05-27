import React, { useEffect, useState } from 'react';
import TeamData from '../TeamData/TeamData';
import image1 from '../../Photo/banner.jpg';
import FadeLoader from "react-spinners/FadeLoader";
import './Home.css';

const Home = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false);
    const first9 = team.slice(0, 9);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])
    
    const backgroundStyle ={
        backgroundImage: `url(${image1}`,
        backgroundSize: "cover",
        height:"60vh", 
        color: "white"

    }

    return (
        <div className="text-center">
            {
                loading ?
                   <div className="loader">
                      <FadeLoader 
                        
                        color={"#F37A24"}
                        loading={loading}
                        size={60}
                    />

                   </div>
                    :
                    <div style={{ backgroundColor: "#16213e" }}>

                        <div style={backgroundStyle}>
                            <h1 className="team-div">Team Explore</h1>
                        </div>

                    
                        <div className="container">
                            <div className="row">
                                {
                                    first9.map(td => <TeamData td={td} key={td.idTeam}></TeamData>)
                                }
                            </div>

                        </div>

                    </div>
            }
        </div>
    );
};

export default Home;