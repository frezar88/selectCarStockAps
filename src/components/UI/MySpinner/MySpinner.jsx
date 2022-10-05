import React from 'react';
import {CircularProgress} from "@mui/material";

const MySpinner = () => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <CircularProgress  style={{color:'#fff'}}/>
        </div>
    );
};

export default MySpinner;