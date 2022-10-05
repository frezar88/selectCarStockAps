import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react"; // Pagination module
import s from './Slider.module.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Store from "../../../store/store";

const Slider = () => {
    const [state,setState]=useState('С пробегом')
    const clickSliderButton = (data)=>{
        setState(data)
        Store.setTypeCar(data)
        Store.resetFormData()
        Store.setDefaultCountCars()

    }
    return (
        <div>
            <Swiper
                className={s.slider}
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    320:{
                        width: 155,
                        slidesPerView: 1,
                    },
                    450:{
                        width: 420,
                        slidesPerView: 2,
                    },

                    640: {
                        width: 720,
                        slidesPerView: 4
                    },
                }}
            >
                {/*<SwiperSlide className={s.slide}>*/}
                {/*        <button*/}
                {/*            className={[s.slide_button,state ==='Новые авто'? s.active:''].join(' ')}*/}
                {/*            onClick={()=>clickSliderButton('Новые авто')}*/}
                {/*            type={'button'}*/}
                {/*        > Новые авто</button>*/}
                {/*</SwiperSlide>*/}
                <SwiperSlide className={s.slide}>
                        <button className={[s.slide_button,state ==='С пробегом'? s.active:''].join(' ')}
                                onClick={()=>clickSliderButton('С пробегом')}
                                type={'button'}
                        >С пробегом</button>
                </SwiperSlide>
                {/*<SwiperSlide className={s.slide}>*/}
                {/*        <button className={[s.slide_button,state ==='Коммерческие'? s.active:''].join(' ')}*/}
                {/*                onClick={()=>clickSliderButton('Коммерческие')}*/}
                {/*                type={'button'}*/}
                {/*        >Коммерческие</button>*/}
                {/*</SwiperSlide>*/}
                <SwiperSlide className={s.slide}>
                        <button className={[s.slide_button,state ==='Спец.предложения'? s.active:''].join(' ')}
                                onClick={()=>clickSliderButton('Спец.предложения')}
                                type={'button'}
                        >Спец.предложения</button>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;