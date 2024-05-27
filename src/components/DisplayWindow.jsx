import React from 'react'

const DisplayWindow = ({ expression, result }) => {
  return (
    <div className="display-window p-4 rounded-t-lg text-right text-xl w-full bg-gray-200 overflow-hidden">
      <div className="expression text-gray-500 mb-2">{expression}</div>
      <div className="result text-2xl">{result}</div>
    </div>
  )
}

export default DisplayWindow
