const DisplayWindow = ({expression, result}) => {
  return (
    <div className="bg-almostBlack flex flex-col items-end justify-end p-4 h-22 font-semibold scrollbar-none">
        <p className=" overflow-x-auto w-full text-right text-textColor">{expression}</p>
        <p className="text-xl font-semibold">{result}</p>
    </div>
  )
}
export default DisplayWindow