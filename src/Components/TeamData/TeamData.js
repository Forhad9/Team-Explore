import React from 'react';
import { Link } from 'react-router-dom';

const TeamData = (props) => {
    const {strTeamBadge, strTeam, idTeam} =props.td;
    return (
      <div className="col-md-4 p-3">
        <div className="rounded  text-center bg-white pt-4 pb-4 mt-2">
          <img style={{width:"60%"}} src={strTeamBadge} alt=""/>
          <h2>{strTeam}</h2>
          <p><small>sports type: Football</small></p>
          <Link to={`/detail/${idTeam}`}> <button className="btn btn-primary rounded">Explore</button></Link>
          
        </div>
      
      </div>
    );
};

export default TeamData;