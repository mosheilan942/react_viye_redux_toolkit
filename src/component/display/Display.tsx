import React from 'react'
import { useAppSelector } from "../../app/hooks";

const array = ["חתול"]

function Display() {
    const select = useAppSelector((state) => state.animel.value);
  return (
    <>
    <p style={{backgroundColor:"purple"}}>Current animel: {select}</p>
    </>
  )
}

export default Display