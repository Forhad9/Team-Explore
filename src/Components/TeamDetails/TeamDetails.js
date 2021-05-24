import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import image1 from '../../Photo/banner.jpg';


const TeamDetails = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])
    
    return (
        <div style={{backgroundColor:"#f6dfeb"}}>
            <div style={{ backgroundImage: `url(${image1}`, backgroundSize: "cover", height: "60vh", color: "white", textAlign: "center", position: "relative" }}>
                <h1 style={{ position: "absolute", top: "30%", left: "40%" }}><img style={{ width: "150px" }} src={details.strTeamBadge} alt="" /></h1>
            </div>
            <div className="container">
             <div className="row">
                <div className="col-md-6">
                <h1>this is team information {details.strGender}</h1>
                </div>
                <div className="col-md-6">
                <h1>this is team information {details.strGender}</h1>
                </div>
             
             </div>
            
            </div>

            
        </div>
    );
};

export default TeamDetails;