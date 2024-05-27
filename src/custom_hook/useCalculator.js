import { useReducer } from 'react'

const initialState = {
  expression: '',
  displayEXP: '',
  result: '0',
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        expression: state.expression + action.payload,
        displayEXP: state.displayEXP + action.payload,
      }
    case 'ADD_SCI_FUNC':
      let newExpression = state.expression
      let newDisplayEXP = state.displayEXP

      if (['Math.PI', 'Math.E'].includes(action.payload.func)) {
        newExpression += action.payload.func
        newDisplayEXP += action.payload.symbol
      } else {
        newExpression += action.payload.func + '('
        newDisplayEXP += action.payload.symbol + '('
      }

      return {
        ...state,
        expression: newExpression,
        displayEXP: newDisplayEXP,
      }
    case 'ADD_CLOSING_BRACKET':
      return {
        ...state,
        expression: state.expression + ')',
        displayEXP: state.displayEXP + ')',
      }
    case 'CALCULATE_RESULT':
      try {
        const compute = eval(
          state.expression +
            ')'.repeat(
              (state.expression.match(/\(/g) || []).length -
                (state.expression.match(/\)/g) || []).length
            )
        )
        const result = parseFloat(compute.toFixed(4))
        return { ...state, result: result.toString() }
      } catch {
        return { ...state, result: 'An Error Occurred!' }
      }
    case 'CLEAR':
      return initialState
    case 'DELETE_LAST':
      return {
        ...state,
        expression: state.expression.slice(0, -1),
        displayEXP: state.displayEXP.slice(0, -1),
      }
    case 'FACTORIAL':
      const lastNum = extractLastNum(state.expression)
      if (lastNum != null) {
        const num = parseFloat(lastNum)
        return {
          ...state,
          expression: state.expression.replace(lastNum, factorial(num)),
          displayEXP: state.displayEXP + '!',
        }
      }
      return state
    default:
      return state
  }
}

function extractLastNum(exp) {
  const numbers = exp.match(/(\d+(\.\d+)?|\.\d+)(?=\D*$)/g) // Matches the last number
  return numbers ? numbers[numbers.length - 1] : null
}

function factorial(n) {
  let result = 1
  for (let i = 1; i <= n; i++) result *= i
  return result
}

export default function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
