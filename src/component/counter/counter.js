import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from './counter_slice'

export function Counter() {
    const count = useSelector((state) => state.counter.coin)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <div> 
            <h1>Total Amount In Bank:{count}</h1>
          </div>
        <div>
          <h1>Cash Counter</h1>
          <input type="number"  onKeyUp={(e) => dispatch(incrementByAmount(e.target.value))}></input>
        </div>
        <div>
          <h1>ATM</h1>
          <input type="number"  onKeyUp={(e) => dispatch(decrementByAmount(e.target.value))}></input>
        </div>

          <button className='button-1'
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            Increment
          </button>
          <span>{count}</span>
          <button className='button-2'
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByAmount(10))}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  };