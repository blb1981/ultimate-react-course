import { useState } from 'react'

import './App.css'

const Counter = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  const handleDecreaseStep = () => {
    setStep((step) => step - 1)
  }
  const handleIncreaaseStep = () => {
    setStep((step) => step + 1)
  }

  const handleDecreaseCount = () => {
    setCount((count) => count - step)
  }
  const handleIncreaseCount = () => {
    setCount((count) => count + step)
  }

  return (
    <div>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncreaaseStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncreaseCount}>+</button>
      </div>

      <div className='date'>Date: {date.toDateString()}</div>
    </div>
  )
}

const App = () => {
  return <Counter />
}

export default App
