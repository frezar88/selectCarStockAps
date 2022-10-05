import React from 'react';
import s from './FilterList.module.scss'
import MySelect from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";
import Store from "../../store/store";
import {observer} from "mobx-react-lite";
import MyButton from "../UI/MyButton/MyButton";

const FilterList = observer( () => {
    const setValueInput=(e,key)=>{
        Store.setFormData([key],e.target.value)
        Store.setDefaultCountCars()
    }


    return (
        <div className={s['filter-list']}>
                <ul>
                    <li>
                        <MySelect
                            change={(e)=>setValueInput(e,'brand')}
                            value={Store.getFormData().brand}
                            data={Store.getDefaultValuesSelects()['brand']} label={'Марка'}
                        />
                    </li>
                    <li>
                        <MySelect
                            change={(e)=>setValueInput(e,'model')}
                            value={Store.getFormData().model}
                            data={Store.getDefaultValuesSelects()['model']}
                            label={'Модель'}
                        />
                    </li>
                    <li>
                        <MyInput
                            change={(e)=>setValueInput(e,'price_from')}
                            value={Store.getFormData().price_from}
                            label={'Цена от'}
                        />
                    </li>
                    <li>
                        <MyInput
                            change={(e)=>setValueInput(e,'year_from')}
                            value={Store.getFormData().year_from}
                            year={true}
                            label={'Год выпуска от'}
                        />
                    </li>

                    {
                        Store.getShowAllFilters()
                            ? <>
                                <li>
                                    <MyInput
                                        change={(e)=>setValueInput(e,'year_to')}
                                        value={Store.getFormData().year_to}
                                        year={true}
                                        label={'Год выпуска до'}
                                    />
                                </li>
                                <li>
                                    <MyInput label={'Цена до'}
                                             change={(e)=>setValueInput(e,'price_to')}
                                             value={Store.getFormData().price_to}
                                    />
                                </li>
                                <li>
                                    <MyInput label={'Мощьность от, л.с'}
                                             change={(e)=>setValueInput(e,'engine_power_from')}
                                             value={Store.getFormData().engine_power_from}
                                    />
                                </li>
                                <li>
                                    <MyInput label={'Мощьность до, л.с'}
                                             change={(e)=>setValueInput(e,'engine_power_to')}
                                             value={Store.getFormData().engine_power_to}
                                    />
                                </li>
                                <li>
                                    {/*<MySelect */}
                                    {/*          change={(e)=>setValueInput(e,'car_body')}*/}
                                    {/*          value={Store.getFormData().car_body}*/}
                                    {/*          data={Store.getDefaultValuesSelects()['car_body']} label={'Кузов'}*/}
                                    {/*/>*/}
                                    <MySelect
                                        change={(e)=>setValueInput(e,'car_body')}
                                        value={Store.getFormData().car_body}
                                        data={Store.getDefaultValuesSelects()['car_body']}
                                        label={'Кузов'}
                                    />

                                </li>
                                <li>
                                    <MySelect
                                        change={(e)=>setValueInput(e,'transmission')}
                                        value={Store.getFormData().transmission}
                                        data={Store.getDefaultValuesSelects()['transmission']}
                                        label={'КПП'}
                                    />
                                </li>
                                <li>
                                    <MySelect
                                        change={(e)=>setValueInput(e,'engine_fuel_type')}
                                        value={Store.getFormData().engine_fuel_type}
                                        data={Store.getDefaultValuesSelects()['engine_fuel_type']}
                                        label={'Двигатель'}
                                    />
                                </li>
                                <li>
                                    <MySelect
                                        change={(e)=>setValueInput(e,'drive')}
                                        value={Store.getFormData().drive}
                                        data={Store.getDefaultValuesSelects()['drive']}
                                        label={'Привод'}
                                    />
                                </li>
                                <li>
                                    <MySelect
                                        change={(e)=>setValueInput(e,'color')}
                                        value={Store.getFormData().color}
                                        data={Store.getDefaultValuesSelects()['color']}
                                        label={'Цвет'}
                                    />
                                </li>
                                <li>
                                    <MySelect
                                        change={(e)=>setValueInput(e,'dealer')}
                                        value={Store.getFormData().dealer}
                                        data={Store.getDefaultValuesSelects()['dealer']}
                                        label={'Диллерский центр'}
                                    />
                                </li>

                            </>
                            :''
                    }
                    <li className={s.hidden}>

                    </li>
                    <li className={s.hiddenButton}>
                        <MyButton/>
                    </li>

                </ul>
        </div>
    );
});

export default FilterList;