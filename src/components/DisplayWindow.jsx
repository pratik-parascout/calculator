import React from 'react'

const DisplayWindow = ({ expression, result, theme }) => {
  return (
    <div
      className={`display-window p-4 rounded-t-lg text-right text-xl ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      }`}
    >
      <div className="expression text-gray-500 mb-2">{expression}</div>
      <div className="result text-2xl">{result}</div>
    </div>
  )
}

export default DisplayWindow
