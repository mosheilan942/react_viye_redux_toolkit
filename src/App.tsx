import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from "react-redux";
import { store } from "./app/store";
import './App.css'
import Zoo from "./component/zoo/Zoo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Provider store={store}>
        <Zoo/>
    </Provider>
    </>
  )
}

export default App
