import './App.css';
import { useReducer } from 'react';

export const CLEAR = 'CLEAR'
export const MULTIPLICATION = 'MULTIPLICATION'
export const DIVISION = 'DIVISION'
export const SUBTRACTION = 'SUBTRACTION'
export const ADDITION = 'ADDITION'
export const RESULT = 'RESULT'
export const NUMBER = 'NUMBER'

let oldState = {
  result: 0,
  leftValue: '',
  operator: '',
  rightValue: ''
}

let reducerFunction = (oldState, action) => {
  let newState = oldState;
  switch (action.type) {
    case CLEAR:
      return {
        result: 0,
        leftValue: '',
        operator: '',
        rightValue: '',
        view: ''
      }
      break;
    case MULTIPLICATION:
      return {
        ...newState,
        operator: '*',
      }
      break;
    case DIVISION:
      return {
        ...newState,
        operator: '/'
      }
      break;
    case ADDITION:
      return {
        ...newState,
        operator: '+'
      }
      break;
    case SUBTRACTION:
      return {
        ...newState,
        operator: '-'
      }
      break;
    case RESULT:

      switch (newState.operator) {
        
        case "+":
          return {
            ...newState,
            result: parseFloat(newState.leftValue) + parseFloat(newState.rightValue)
          }
          break;
        case "-":
          return {
            ...newState,
            result: parseFloat(newState.leftValue) - parseFloat(newState.rightValue)
          }
          break;
        case "*":
          return {
            ...newState,
            result: parseFloat(newState.leftValue) * parseFloat(newState.rightValue)
          }
          break;
        case "/":
          return {
            ...newState,
            result: parseFloat(newState.leftValue) / parseFloat(newState.rightValue)
          }
          
          break;

        default:
          break;

      }
      break;
    case NUMBER:
      if (newState.operator === '') {
        return {
          ...newState,
          leftValue: newState.leftValue + action.payload
         // view: newState.view + ' ' + newState.leftValue
        }

      } else {
        return {
          ...newState,
          rightValue: newState.rightValue + action.payload,
          // view: newState.view + ' ' +newState.leftValue
        }
      }
      break;

    default:
      break;
  }
}

function App() {

  const [newState, dispatch] = useReducer(reducerFunction, oldState)

  return (
    <>
      <div class="container">
        <form action="true" name="calc" class="calculator">
          <input type="text" class="value" value={newState.result === 0 ? newState.leftValue + newState.operator + newState.rightValue : newState.result} readonly name="txt" />
          <span class="num clear" onClick={() => { dispatch({ type: CLEAR }) }}><i>C</i></span>
          <span class="num" onClick={() => { dispatch({ type: DIVISION }) }}><i>/</i></span>
          <span class="num" onClick={() => { dispatch({ type: MULTIPLICATION }) }}><i>*</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 7 }) }}><i>7</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 8 }) }}><i>8</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 9 }) }}><i>9</i></span>
          <span class="num" onClick={() => { dispatch({ type: SUBTRACTION }) }}><i>-</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 4 }) }}><i>4</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 5 }) }}><i>5</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 6 }) }}><i>6</i></span>
          <span class="num plus" onClick={() => { dispatch({ type: ADDITION }) }}><i>+</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 1 }) }}><i>1</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 2 }) }}><i>2</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 3 }) }}><i>3</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: 0 }) }}><i>0</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: '00' }) }}><i>00</i></span>
          <span class="num" onClick={() => { dispatch({ type: NUMBER, payload: '.' }) }}><i>.</i></span>

          <span
            class="num equal"
            onClick={() => { dispatch({ type: RESULT }) }}
          ><i>=</i></span
          >
        </form>
      </div>

    </>
  );
}

export default App;
