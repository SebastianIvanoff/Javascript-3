import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/actions/counterActions'

const Quantity = () => {

    const dispatch = useDispatch()
  const { value } = useSelector(state => state.quantity)

  return (
    <div>
      <h3>Quantity</h3>
      <p>quantity is = { value }</p>
      <button onClick={() => dispatch(increment(1))}>1</button>
      <button onClick={() => dispatch(increment(10))}>10</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
      <button>-</button>
    </div>
  )
}

export default Quantity