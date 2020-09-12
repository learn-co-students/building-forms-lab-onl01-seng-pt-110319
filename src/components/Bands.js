import React from 'react';

const Bands = props => {
    const renderBands = props.bands.map((band, index) => <li key={index}>{band.name}</li>)

    return(
        <div>
            {renderBands}
        </div>
    );
};

export default Bands;