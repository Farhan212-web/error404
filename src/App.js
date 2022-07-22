import React from 'react';
import './App.css';
import ScareCrowBox from './ScareCrowBox';
import Scarecrow from './Scarecrow.png';

const App = () => {
    return (
        <div className="App">
            <h3>404 not found</h3>

            <ScareCrowBox img={Scarecrow} />
        </div>
    )
}

export default App;