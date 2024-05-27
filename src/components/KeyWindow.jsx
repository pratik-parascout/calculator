import React from 'react'

const KeysWindow = ({ handleButton }) => {
  const sciKeys = ['sin', 'cos', 'ln', 'log', 'tan', 'π', 'e', '^', '!', '√']

  const basicKeys = [
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '/',
    '1',
    '2',
    '3',
    '-',
    '(',
    '+',
    ')',
    '.',
    '0',
    'DEL',
    'AC',
    '=',
  ]

  return (
    <div className="keysWindow bg-gray-200 rounded-lg p-2">
      <div className="keys_scientific grid grid-cols-5 gap-2 mb-2">
        {sciKeys.map((item, index) => (
          <button
            key={index}
            className="key bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 active:bg-blue-800"
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="line border-t-2 border-gray-400 my-2"></div>
      <div className="keys_basic grid grid-cols-4 gap-2">
        {basicKeys.map((item, index) => (
          <button
            key={index}
            className={`key bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 
              ${item === '=' ? 'bg-red-500' : ''}
              ${item >= '0' && item <= '9' ? 'number' : ''}
            `}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default KeysWindow
