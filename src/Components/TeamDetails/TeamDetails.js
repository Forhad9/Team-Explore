import React, { useEffect, useState } from 'react';
import './TeamDetails.css';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../Photo/banner.jpg';
import FemaleTeamImg from '../../Photo/female.png';
import MaleTeamImg from '../../Photo/male.png';



const TeamDetails = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState({});
    const {strTeamBadge, intFormedYear, strCountry, strGender} =details;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])
  
    const backgroundStyle={
        backgroundImage: `url(${image1}`,
        backgroundSize: "cover",
        height: "60vh",
        filter:"brightness(70%)"  
    }
    
    return (
        <div style={{ backgroundColor: "#03002D" }}>

            <div style={backgroundStyle}>
                <h1 className="team-div"><img style={{ width: "180px" }} src={strTeamBadge} alt="" /></h1>
            </div>


            <div className="container text-white p-2">

                <div style={{ backgroundColor: "#323edd", borderRadius: "15px",fontFamily: "Times New Roman Times serif"}} className="row mt-3 pt-3 pb-3">


                    <div className="col-md-8">
                        <h1>{details.strTeam}</h1>
                        <h5><FontAwesomeIcon icon={faCalendarCheck}/>   Founded: January 27,{intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag}/>   Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol}/> Sports type: Football</h5>
                        <h5><FontAwesomeIcon icon={faMars}/>   Gender: {strGender}</h5>
                    </div>

                    <div className="col-md-4">
                        {
                            strGender === 'Female' ? <img className="img-fluid" src={FemaleTeamImg} alt="..." />
                                                 : <img className="img-fluid" src={MaleTeamImg} alt="..." />
                        }
                    </div>

                </div>


                <div className="mt-4  text-secondary">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id repellat quod nam nobis, autem error aperiam, at consectetur omnis laboriosam eveniet esse nisi ratione dolore minus amet dignissimos! Laudantium corporis dolores quae eius tempora numquam doloribus fuga facere iusto optio illum error sapiente architecto voluptatum nam deserunt, qui ullam sed alias tempore, itaque libero. Sequi facere quos, nostrum architecto porro unde dicta facilis commodi dolorum aut aperiam quae ex! Ducimus eos ratione fuga doloremque neque quam rem et facere culpa, est alias eligendi voluptates amet facilis dolorem ab, esse reprehenderit excepturi. Ab corrupti sapiente placeat veniam pariatur saepe ducimus quos.</p>
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit ipsa odit a hic ducimus esse. Aperiam nostrum officia nisi voluptate sint beatae, culpa iure dolores quisquam ea, rerum reprehenderit omnis nam iusto vitae voluptatibus dicta quasi, veritatis asperiores veniam aspernatur modi consequuntur molestiae! Eaque nihil magni exercitationem illum iste harum deserunt necessitatibus officia, illo consectetur at suscipit placeat quam doloribus ipsum asperiores laudantium, architecto vel sint accusantium. Sit, eius cupiditate aspernatur repudiandae molestiae hic fugit. Dignissimos magni officia voluptatem magnam enim nam cupiditate dolorem odio! Ipsam aliquid eligendi quas?</p>
                </div>


                <div className="text-center social-Icons mb-4">
                    <a  href={`https://${details.strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a  href={`https://${details.strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a  href={`https://${details.strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>


            </div>

        </div>
    );
};

export default TeamDetails;