import React from 'react';
import s from './BottomBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import {observer} from "mobx-react-lite";
import FilterList from "../FilterList/FilterList";

const BottomBlock = observer(() => {
    return (
        <div className={s['bottom-block']}>
            <FilterList/>
            <div className={s['mobile-buttons']}>
                <MyButton/>
            </div>

        </div>


    );
});

export default BottomBlock;