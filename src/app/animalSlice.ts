import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type AnimalState = {
    value: number | string
};

const initialState: AnimalState = {
    value: 0,
};

export const animalSlice = createSlice({
    name: "animal",
    initialState,
    reducers: {
        selectAnimal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        addAnimal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
});


export const { selectAnimal, addAnimal } = animalSlice.actions
export default animalSlice.reducer