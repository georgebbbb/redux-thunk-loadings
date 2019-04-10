# Redux Thunk Loadings
A loading wrapper for redux-thunk 

## Installation
```js
npm install redux-thunk-loadings
```

```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loadingsReducer } from 'redux-thunk-loadings'
import thunk from 'redux-thunk' 
 
const store = createStore(
  combineReducers({
    loadings: loadingsReducer
  }), 
  applyMiddleware(thunk)
)
```

## Motivation
In most cases, loading is necessary when we request API. redux-thunk-loadings is a way to reduce boilerplate


