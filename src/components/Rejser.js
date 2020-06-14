import React from 'react';
import feed from '../utils/feed.json';

const rejse = feed.rejse;

class Rejser extends React.Component {
	render() {
		return (
            <div>
                {console.log(rejse)}
                <p>{rejse.destination.text}</p>
                <p>{rejse.skidage}</p>
                <p>{rejse.afrejse}</p>
            </div>
        );
    }
} 
export default Rejser;