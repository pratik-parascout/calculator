import React, { useState, useEffect } from 'react'
import DisplayWindow from './DisplayWindow'
import KeyWindow from './KeyWindow'

const Calculator = () => {
  const [expression, setExpression] = useState('')
  const [displayEXP, setDisplayEXP] = useState('')
  const [result, setResult] = useState('0')

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event
      if (
        /\d/.test(key) ||
        key === '.' ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '(' ||
        key === ')' ||
        key === '^' ||
        key === 'π' ||
        key === 'e'
      ) {
        handleButton(key)
      } else if (key === 'Enter') {
        handleButton('=')
        event.preventDefault() // Prevent default form submission behavior
      } else if (key === 'Backspace') {
        handleButton('DEL')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [expression]) // Dependency array ensures effect runs when expression changes

  function calcResult() {
    if (expression.length !== 0) {
      try {
        let compute = eval(expression)
        compute = parseFloat(compute.toFixed(4))
        setResult(compute.toString()) // Ensure result is converted to string
      } catch (error) {
        setResult('An Error Occurred!')
      }
    } else {
      setResult('0')
    }
  }

  function handleButton(value) {
    if (value === 'AC') {
      setExpression('')
      setDisplayEXP('')
      setResult('0')
    } else if (value === 'DEL') {
      setDisplayEXP(displayEXP.slice(0, -1))
      setExpression(expression.slice(0, -1))
    } else if (sciFunc.hasOwnProperty(value)) {
      setDisplayEXP(displayEXP + value)
      setExpression(expression + sciFunc[value])
    } else if (value === '!') {
      const lastNum = extractLastNum(expression)
      if (lastNum != null) {
        const num = parseFloat(lastNum)
        setDisplayEXP(displayEXP + value)
        setExpression(expression.replace(lastNum, factorial(num)))
      }
    } else if (value === '=') calcResult()
    else {
      setExpression(expression + value)
      setDisplayEXP(displayEXP + value)
    }
  }

  function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) result *= i
    return result
  }

  function extractLastNum(exp) {
    const numbers = exp.match(/-?\d+(\.\d+)?/g)
    return numbers ? numbers[numbers.length - 1] : null
  }

  return (
    <div className="calculator flex flex-col justify-center items-center p-4 rounded-lg shadow-md max-w-md mx-auto bg-white text-black overflow-hidden">
      <DisplayWindow expression={displayEXP} result={result} />
      <hr />
      <KeyWindow handleButton={handleButton} />
    </div>
  )
}

export default Calculator
