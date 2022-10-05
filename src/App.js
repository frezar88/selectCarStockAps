import React, {useEffect} from 'react';
import s from "./App.module.scss";
import TopBlock from "./components/TopBlock/TopBlock";
import {observer} from "mobx-react-lite";
import BottomBlock from "./components/BottomBlock/BottomBlock";
import Store from "./store/store";
import MySpinner from "./components/UI/MySpinner/MySpinner";

const App = observer(() => {
    useEffect(()=>{
        Store.setAllCars()
    },[])
    return (
        <div className={s['search-car']}>
            <div className={[s['search-car__wrapper'],'my-container'].join(' ')}>
                {
                    Store.getLoadData()
                    ?
                        <>
                            <TopBlock/>
                            <BottomBlock/>
                        </>
                        :  <MySpinner/>
                }
            </div>
        </div>
    );
});

export default App;