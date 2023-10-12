import React from 'react'
import Box from '@mui/material/Box';
import Buttons from '../buttons/Buttons';
import Another from '../another/Another';
import Display from '../display/Display';

const style = {
    width: 500,
    height: 500,
    backgroundColor: '#fbfeff',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'center'
}


export default function SelectComp() {

    return (
        <>
        <Display/>
            <div style={{ display: "flex" }}>
                <Box
                    sx={style}>
                    <div style={{ display: "flex" }}>

                        {/* <Right /> */}
                        <Buttons />
                    </div>
                    <div>
                        <Another />

                    </div>
                </Box>
            </div >
        </>
    )
}
