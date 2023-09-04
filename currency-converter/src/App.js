import './App.css'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [amount, setAmount] = useState(100)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('EUR')
  // htps://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  useEffect(() => {
    async function fetchConversion() {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
        )
        const data = await response.json()
        const { rates } = data

        console.log(rates[currency2])
        setConvertedAmount(rates[currency2])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    if (currency1 === currency2) {
      setConvertedAmount(amount)
      return
    }
    fetchConversion()
  }, [amount, currency1, currency2])

  return (
    <div className='App'>
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        ref={inputEl}
      />
      <select value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <p>{isLoading ? 'Loading...' : `${convertedAmount} ${currency2}`} </p>
    </div>
  )
}

export default App
