import React from 'react';
// gif
import Load from "../image/gif/Gold coin Bitcoin.gif"
// Style
import style from "../Component-Style/Loading.module.css"

const Loading = () => {
    return (
        <div className={style.boxLoad}>
            <img src={Load} alt=""/>
        </div>
    );
};

export default Loading;
