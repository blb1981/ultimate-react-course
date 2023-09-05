import { useReducer } from 'react'

function reducer(state, action) {
  // console.log(state, action)

  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step }
    case 'dec':
      return { ...state, count: state.count - state.step }
    case 'setCount':
      return { ...state, count: action.payload }
    case 'setStep':
      return { ...state, step: action.payload }

    case 'reset':
      return { count: 0, step: 1 }
    default:
      throw new Error('Unknown action')
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  // This mutates the date object.
  const date = new Date('september 5 2023')
  date.setDate(date.getDate() + count)

  const reset = function () {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={(e) =>
            dispatch({ action: 'setStep', payload: Number(e.target.value) })
          }
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
        <input
          value={count}
          onChange={(e) =>
            dispatch({ type: 'setCount', payload: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default DateCounter
