import React from 'react';
import Lander from "./Component/Lander";
import Style from "./Component-Style/App.module.css"
import background from "../src/image/bg-quickstart.dab977c4.png"

const App = () => {
    return (
        <div className={Style.App}>
            <Lander/>
            <img src={background} alt="background"/>
        </div>
    );
};

export default App;
