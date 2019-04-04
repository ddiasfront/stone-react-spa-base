import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT'
}


export const actionTypesz = {
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

export const reducerz = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypesz.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypesz.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  reducer,
  reducerz
})

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypesz.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypesz.RESET }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
