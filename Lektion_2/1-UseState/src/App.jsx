import React from 'react'
import { useState } from 'react'

const App = () => {
let name = 'Sebbe'



const [counter, setCounter] = useState(0)



const incrementCounter = () => {

  setCounter((prevValue) => {
   return prevValue + 1
  })

}

  return (
    <> 
   <h1>{name}</h1>

   <button onClick={incrementCounter}>clicked {counter} times</button>
   </>
  )
}

export default App