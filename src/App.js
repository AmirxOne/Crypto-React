import React from 'react';
import Lander from "./Component/Lander";
import Style from "./Component-Style/App.module.css"

const App = () => {
    return (
        <div className={Style.App}>
            <Lander/>
        </div>
    );
};

export default App;
