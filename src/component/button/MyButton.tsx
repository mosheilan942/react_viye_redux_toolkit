import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch } from "../../app/hooks";
import { selectAnimal, addAnimal } from "../../app/animalSlice";
import { useAppSelector } from "../../app/hooks";


type Props = {
    value:string
    color:string
};


const style = {
    width: 150,
    height: 50,
    backgroundColor: '#FF5733',
    color: '#ffffff',
    margin: 0.5,
    '&:hover': {
        backgroundColor: 'transparent'!,
      }
}


function MyButton(props:Props) {
    
    const dispatch = useAppDispatch();
    const select = useAppSelector((state) => state.animel.value);
    select === props.value ? style.backgroundColor = '#0000CD' :  style.backgroundColor = props.color
  return (
    <>
     <Button disableRipple onClick={() => dispatch(selectAnimal(props.value))} sx={style} 
     >{props.value}</Button>
    </>
  )
}

export default MyButton