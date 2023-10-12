import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch } from "../../app/hooks";
import { selectAnimal, addAnimal } from "../../app/animalSlice";
import MyButton from '../button/MyButton';

const array = ["moshe", "simy", "loziny", "יתוש", "טישו", "רחמים"]

const style = {
    width: 200,
    height: 200,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
}


export default function Buttons() {

    return (
        <>
            <div>
                <Box
                    sx={style}>
                    {array.map((animel, index) => {
                        if (index > 2) {
                            const color = '#FF5733'
                            return <MyButton value={animel} color={color} />
                        }
                        return <MyButton value={animel} color={'#008000'} />
                    })}
                </Box>
            </div>
        </>
    )
}
