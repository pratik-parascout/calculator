import { useReducer } from 'react'

const initialState = {
  expression: '', // String to store current expression
  result: '', // String to store the result
}

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'APPEND':
      return { ...state, expression: state.expression + action.payload }
    case 'CLEAR':
      return initialState
    case 'DELETE':
      return { ...state, expression: state.expression.slice(0, -1) }
    case 'CALCULATE':
      try {
        const result = eval(state.expression) // Evaluate the expression
        return { ...state, result: result.toString() }
      } catch (error) {
        return { ...state, result: 'Error' }
      }
    case 'EVAL_TRIG_FUNCTION':
      const { expression } = state
      const trigFunction = action.payload // 'sin', 'cos', 'tan'
      const match = expression.match(new RegExp(`${trigFunction}\\s*(\\d+)`))
      if (match) {
        const value = match[1]
        const radians = (value * Math.PI) / 180 // Convert degrees to radians
        const trigResult = Math[trigFunction](radians)
        return {
          ...state,
          expression: `${trigFunction} ${value}`,
          result: trigResult.toString(),
        }
      }
      return state
    default:
      return state
  }
}

const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return { state, dispatch }
}

export default useCalculator
