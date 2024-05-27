import React from 'react'

const KeyWindow = ({ handleButton, theme }) => {
  const buttons = [
    'AC',
    'DEL',
    'π',
    'e',
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '+',
    '√',
    'sin',
    'cos',
    'tan',
    'ln',
    'log',
    '^',
    '!',
    ')', // Closing bracket added back
    '=', // '=' moved to end
  ]

  return (
    <div
      className={`key-window grid grid-cols-4 gap-2 p-2 rounded-b-lg ${
        theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
      }`}
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButton(button)}
          className={`key bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 
  ${button === '=' ? 'col-span-4' : ''} 
  ${theme === 'light' ? 'text-black' : 'text-white'}
`}
        >
          {button}
        </button>
      ))}
    </div>
  )
}

export default KeyWindow
