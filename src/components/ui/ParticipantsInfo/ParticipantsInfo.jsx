import React from 'react';
import InfoTable from '../InfoTable/InfoTable';

const ParticipantsInfo = () => {
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <h2>Members of our community</h2>
                <hr style={{marginBottom:'20px'}} />
            </div>
            <InfoTable></InfoTable>
        </div>
    );
};

export default ParticipantsInfo;