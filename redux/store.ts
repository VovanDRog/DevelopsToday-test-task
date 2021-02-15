import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper'
import { IState } from '../types'

const bindMiddleware = (middleware?: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

// <unknown> => ReturnType<typeof rootReducer>
const makeStore: MakeStore<IState> = () => {
  const store = createStore(reducer, {}, bindMiddleware([thunkMiddleware]))
  return store
}

export const wrapper = createWrapper<IState>(makeStore, { debug: true })
