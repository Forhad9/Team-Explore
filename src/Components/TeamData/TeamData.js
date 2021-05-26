import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TeamData = (props) => {
  
  const { strTeamBadge, strTeam, idTeam } = props.td;

  return (
    <div className="col-md-6 col-lg-4 p-3">

      <div className="rounded  text-center bg-white pt-4 pb-4 mt-2">
        <img style={{ width: "50%" }} src={strTeamBadge} alt="" />
        <h2>{strTeam}</h2>
        <p><small>sports type: Football</small></p>
        <Link to={`/detail/${idTeam}`}> <button style={{ width: "120px" }} className="btn btn-primary ">Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
      </div>

    </div>
  );
};

export default TeamData;