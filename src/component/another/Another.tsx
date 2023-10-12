import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from "../../app/hooks";
import { selectAnimal, addAnimal } from "../../app/animalSlice";

export default function Another() {
    const dispatch = useAppDispatch();
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="שם אחר" variant="outlined" onChange={(event) => dispatch(selectAnimal(event.target.value))} />
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </Box>
    </div>
  )
}
