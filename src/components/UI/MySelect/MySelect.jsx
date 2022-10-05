import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import s from './MySelect.module.scss'
import {observer} from "mobx-react-lite";


const MySelect =observer( ({data,label,change,value}) => {

    return (
        <FormControl variant="filled" margin="normal" fullWidth sx={{
            flex: '1',
            fontFamily: 'Fonts',
            width:'100%',
            margin:'0'
        }}>
            <InputLabel  id="brand-label">{label}</InputLabel>
            <Select
                size={'small'}
                labelId="brand-label"
                id={"brand-select"}
                label={label}
                className={s.formInput}
                onChange={(event) => change(event)}
                value={value}
            >
                <MenuItem value=''>Все</MenuItem>
                {
                    data[0]
                        ?data.map((el,index)=>
                            <MenuItem key={index} value={el}>{el}</MenuItem>
                        )
                        :''
                }
            </Select>
        </FormControl>
    );
});

export default MySelect;