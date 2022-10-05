import React from 'react';
import {FormControl, TextField} from "@mui/material";

const MyInput = ({label,value,change,year}) => {
    const checkPrice = (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
        event.target.value = event.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const checkYear = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');

        let maxLength = 4;
        if (+event.target.value.length > maxLength) {
            event.target.value = event.target.value.slice(0, maxLength);
        }

        if (+event.target.value > (new Date()).getFullYear()) {
            event.target.value = (new Date()).getFullYear();
        } else if (event.target.value.length === 4 && +event.target.value < 1964) {
            event.target.value = 1964;
        }
    }

    return (
        <FormControl margin="normal" sx={{
            flex: '1',
            fontFamily: 'Fonts',
            width:'100%',
            margin:'0',

        }}>
            <TextField id="price-from"
                       size={'small'}
                       label={label}
                       variant="filled"
                       value={value}
                       onChange={(event) => change(event)}
                       onInput={year?checkYear: checkPrice}
                       sx={{
                           backgroundColor: '#ffffff',
                           borderRadius: '4px',
                           fontFamily: 'Fonts',

                       }}
            />
        </FormControl>
    );
};

export default MyInput;