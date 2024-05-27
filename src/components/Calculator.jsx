import React, { useState, useEffect } from 'react'
import DisplayWindow from './DisplayWindow'
import KeyWindow from './KeyWindow'
import useCalculator from '../custom_hook/useCalculator'

const Calculator = () => {
  const { state, dispatch } = useCalculator()
  const [theme, setTheme] = useState('light') // State to track current theme

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleButton = (value) => {
    switch (value) {
      case 'AC':
        dispatch({ type: 'CLEAR' })
        break
      case 'DEL':
        dispatch({ type: 'DELETE_LAST' })
        break
      case '=':
        dispatch({ type: 'CALCULATE_RESULT' })
        break
      case '!':
        dispatch({ type: 'FACTORIAL' })
        break
      case 'sin':
      case 'cos':
      case 'tan':
      case 'ln':
      case 'log':
      case '√':
        dispatch({
          type: 'ADD_SCI_FUNC',
          payload: {
            func: `Math.${value}`,
            symbol: `${value}`,
          },
        })
        break
      default:
        dispatch({ type: 'ADD_CHARACTER', payload: value })
        break
    }
  }


  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event
      if (
        /\d/.test(key) ||
        key === '.' ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/'
      ) {
        handleButton(key)
      } else if (key === 'Enter') {
        handleButton('=')
      } else if (key === 'Backspace') {
        handleButton('DEL')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, []) // Empty dependency array ensures the effect runs only once

  const themeClass =
    theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'

  return (
    <div
      className={`calculator p-4 rounded-lg shadow-md max-w-md mx-auto ${themeClass}`}
    >
      <div className="flex justify-end mb-2">
        <button
          className="toggle-theme-btn p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <DisplayWindow expression={state.displayEXP} result={state.result} />
      <KeyWindow handleButton={handleButton} />
    </div>
  )
}

export default Calculator
