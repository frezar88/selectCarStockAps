import React from 'react';
import s from './TopBlock.module.scss'
import Slider from "../UI/Slider/Slider";

const TopBlock = () => {
    return (
        <div className={s.top_block}>
            <h2>ПОДБОР АВТОМОБИЛЯ</h2>
            <Slider/>
        </div>
    );
};

export default TopBlock;