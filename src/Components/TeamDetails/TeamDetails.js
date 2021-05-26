import React, { useEffect, useState } from 'react';
import './TeamDetails.css';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../Photo/banner.jpg';
import FemaleTeamImg from '../../Photo/female.png';
import MaleTeamImg from '../../Photo/male.png';



const TeamDetails = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState({});
    const { strTeamBadge, intFormedYear,strSport, strCountry, strGender, strStadiumDescription, strDescriptionEN } = details;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])

    const backgroundStyle = {
        backgroundImage: `url(${image1}`,
        backgroundSize: "cover",
        height: "60vh",
        filter: "brightness(70%)"
    }

    return (
        <div style={{ backgroundColor: "#03002D" }}>

            <div style={backgroundStyle}>
                <h1 className="team-div"><img style={{ width: "180px" }} src={strTeamBadge} alt="" /></h1>
            </div>


            <div className="container text-white p-2">

                <div style={{ backgroundColor: "#323edd", borderRadius: "15px", fontFamily: "Times New Roman Times serif" }} className="row mt-3 pt-3 pb-3">


                    <div className="col-md-8">
                        <h1>{details.strTeam}</h1>
                        <h5><FontAwesomeIcon icon={faCalendarCheck} />   Founded: January 27,{intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} />   Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMars} />   Gender: {strGender}</h5>
                    </div>

                    <div className="col-md-4">
                        {
                            strGender === 'Female' ? <img className="img-fluid" src={FemaleTeamImg} alt="..." />
                                : <img className="img-fluid" src={MaleTeamImg} alt="..." />
                        }
                    </div>

                </div>


                <div className="mt-4  text-secondary text-justify">
                    <p>{strStadiumDescription}</p>
                    <br />
                    <p>{strDescriptionEN}</p>
                </div>


                <div className="text-center social-Icons mb-4">
                    <a href={`https://${details.strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={`https://${details.strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={`https://${details.strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>


            </div>

        </div>
    );
};

export default TeamDetails;