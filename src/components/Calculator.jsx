import React, { useState } from 'react'
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
    // Implement your button handling logic here
    if (value === 'AC') {
      dispatch({ type: 'CLEAR' })
    } else if (value === 'DEL') {
      dispatch({ type: 'DELETE_LAST' })
    } else if (Object.keys(sciFunc).includes(value)) {
      dispatch({ type: 'ADD_SCI_FUNC', payload: sciFunc[value] })
    } else if (value === '!') {
      dispatch({ type: 'FACTORIAL' })
    } else if (value === '=') {
      dispatch({ type: 'CALCULATE_RESULT' })
    } else if (value === ')') {
      dispatch({ type: 'ADD_CLOSING_BRACKET' })
    } else {
      dispatch({ type: 'ADD_CHARACTER', payload: value })
    }
  }

  const themeClass =
    theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white' // Adjust classes for light and dark themes

  // Define sciFunc object here
  const sciFunc = {
    sin: 'Math.sin',
    cos: 'Math.cos',
    tan: 'Math.tan',
    ln: 'Math.log',
    log: 'Math.log10',
    π: 'Math.PI',
    e: 'Math.E',
    '^': '**',
    '√': 'Math.sqrt',
  }

  return (
    <div
      className={`calculator p-4 rounded-lg shadow-md max-w-md mx-auto ${themeClass}`}
    >
      <div className="flex justify-end mb-2">
        <button
          className="toggle-theme-btn p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙' : '☀️'} {/* Emoji for theme toggle */}
        </button>
      </div>
      <DisplayWindow
        expression={state.displayEXP}
        result={state.result}
        theme={theme}
      />
      <KeyWindow handleButton={handleButton} theme={theme} sciFunc={sciFunc} />
    </div>
  )
}

export default Calculator
