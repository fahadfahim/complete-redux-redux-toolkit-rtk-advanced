import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>===</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text" id="counter" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}

export default Counter