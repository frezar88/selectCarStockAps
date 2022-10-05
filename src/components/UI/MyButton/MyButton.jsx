import React from 'react';
import s from './MyButton.module.scss'
import icon from '../../../images/filter.svg'
import Store from "../../../store/store";
import {observer} from "mobx-react-lite";

const MyButton =observer( () => {
    const showAllFilters=()=>{
        const stateFilters = Store.getShowAllFilters()
        if (stateFilters){
            return Store.setShowAllFilters(false)
        }
        return Store.setShowAllFilters(true)
    }
    const goToFilter=()=>{
        let data = Store.getFormData()
        let href = ['/new-filter']
        for (let key in data) {
            if (data[key]){
                if (href.length!==1){
                    if (key ==='price_from' ||key ==='price_to'||key ==='engine_power_from'||key ==='engine_power_to' ){
                        href.push(`&${key}=${data[key].replaceAll(' ','')}`)
                    }else{
                        href.push(`&${key}=${data[key]}`)
                    }
                }else{
                    if (key ==='price_from'||key ==='price_to'||key ==='price_from'){
                        href.push(`?${key}=${data[key].replaceAll(' ','')}`)
                    }else{
                        href.push(`?${key}=${data[key]}`)
                    }
                }
            }
        }
        console.log(href.join(''))
        window.location.href=href.join('')
    }
    return (
        <div className={s.list}>
            <button
                style={{pointerEvents:Store.getDefaultCountCars()===0?'none':'unset',
                    opacity:Store.getDefaultCountCars()===0?'0.8':1,
                    background:Store.getDefaultCountCars()===0?'#868686':''
            }}
                    onClick={goToFilter} className={s['button-car']}>Показать {
                Store.getDefaultCountCars()
            } авто</button>
            <button onClick={showAllFilters} className={s['button-filter']}><img src={icon} alt="icon"/></button>
        </div>
    );
});

export default MyButton;