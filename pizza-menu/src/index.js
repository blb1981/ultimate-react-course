import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

const Pizza = (props) => {
  const { name, ingredients, price, photoName } = props.pizza
  return (
    <li className='pizza'>
      <img src={photoName} alt='pizza' />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => {
          return <Pizza pizza={pizza} key={pizza.name} />
        })}
      </ul>
    </main>
  )
}

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 11
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer>
      {new Date().toLocaleTimeString()} -
      {isOpen ? "We're open!" : 'Currently closed, sorry.'}
    </footer>
  )
  // return React.createElement('footer', null, "We're currently open!")
}

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
