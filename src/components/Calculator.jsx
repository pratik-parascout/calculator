import { useState } from "react"
import DisplayWindow from "./DisplayWindow"
import KeyWindow from "./KeyWindow"

const Calculator = () => {

    const [expression, setExpression] = useState('')
    const [displayExp, setDisplayExp] = useState('')
    const [result, setResult] = useState('0')

    function handleButton(value){
        // console.log(value);
        if(value==="AC"){
            setDisplayExp("")
            setExpression("")
            setResult("0")
        }
        else if (value==="DEL"){
            setDisplayExp(displayExp.slice(0,-1))
            setExpression(expression.slice(0,-1))
        }
        else{
            setExpression(expression+value)
            setDisplayExp(displayExp+value)
        }
    }

  return (
    <div className=" border-solid border-4 border-textColor border-opacity-5 rounded-lg max-w-128 w-fit overflow-hidden">
        <DisplayWindow expression={displayExp} result={result} />
        <KeyWindow handleButton={handleButton}/>

    </div>
  )
}
export default Calculator