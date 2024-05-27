const KeyWindow = ({handleButton}) => {
  const sciKeys = ['sin', 'cos', 'ln', 'log', 'tan', 'π', 'e', '^', '!', '√']
  const basicKeys = [
    '7',
    '8',
    '9',
    '*',
    '/',
    '4',
    '5',
    '6',
    '-',
    '(',
    '1',
    '2',
    '3',
    '+',
    ')',
    '.',
    '0',
    'DEL',
    'AC',
    '=',
  ]

  return (
    <div className="bg-textColor2 md:flex p-4 md:gap-4 flex-col md:flex-row gap-0">
      <div className="grid grid-cols-5 gap-2 md:gap-4 md:w-1/3 md:grid-cols-2">
        {sciKeys.map((item, index) => (
          <button
            key={index}
            className="border border-none appearance-none outline-none bg-transparent px-3.5 py-5 text-base cursor-pointer text-textColor1 rounded-md hover:bg-textColor3"
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="my-6 w-0.5 bg-textColor4 md:block hidden"></div>

      <div className="flex-1 grid grid-cols-5 gap-2">
        {basicKeys.map((item, index) => (
          <button
            key={index}
            className={`border border-none appearance-none outline-none bg-transparent px-3.5 py-5 text-base cursor-pointer text-textColor1 rounded-md hover:bg-textColor3 ${
              item >= '0' && item <= '9' ? 'text-white font-semibold' : ''
            } ${item === '=' ? 'bg-red-500 hover:bg-red-300 text-black' : ''}`}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default KeyWindow
