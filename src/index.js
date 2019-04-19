import isPromise from 'is-promise'

const LOADING = '_LOADING'

export default function loadings(name, func) {
  return function (...args) {
    const dispatch = args[0]
    if (typeof dispatch !== 'function') {
      throw new TypeError('dispatch should be a function')
    }

    dispatch({ type: LOADING, name, loading: true })

    const promise = func(...args)

    if (!isPromise(promise)) {
      throw new TypeError('Expected return a promise')
    }

    promise.then(
      () => dispatch({ type: LOADING, name, loading: false })
    )

    return promise
  }
}

export function loadingsReducer(state = {}, { type, name, loading }) {
  if(type === LOADING && name) {
    return {
      ...state,
      [name]: loading
    }
  }
  return state
}
