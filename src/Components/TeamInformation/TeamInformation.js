import React from 'react';
import { useParams } from 'react-router';

const TeamInformation = () => {
    const {teamId}=useParams();
    return (
        <div>
            <h1>team information for id {teamId}</h1>
        </div>
    );
};

export default TeamInformation;