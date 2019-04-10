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

#### Before
```js
export const setListPostsLoading = (isLoading) => ({
  type: 'SET_LIST_POSTS_LOADING',
  isLoading
})

export const listPosts = (dispatch) => {
  dispatch(setListPostsLoading(true))
  return listPosts().then(
    () => dispatch(setListPostsLoading(false))
  )
}
```
#### After
```js
export const listPosts = () => loadings('listPosts', () => {
  return listPosts()
})
```

#### Finally

```js
  @connect(
    ({ loadings }) => ({
      loadings
    })
  )
  Class PostList extends Component {
    render() {
      const { loadings } = this.props
      return (
        loadings.listPosts ? <Loading /> : null
      )
    }
  }
```

