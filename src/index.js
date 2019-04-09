import isPromise from 'is-promise'

const LOADING = '_LOADING'

export default function loadings(name, func) {
  return function (dispatch) {
    if (typeof action !== 'function') {
      throw new TypeError('dispatch should be a function')
    }

    dispatch({ type: LOADING, name, loading: true })

    const promise = func(dispatch)

    if (isPromise(promise)) {
      throw new TypeError('need return a promise')
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
