import { combineReducers } from 'redux'
import { PostsState } from '../../types'
import posts from './posts'

export type RootState = {
  posts: PostsState
}

export default combineReducers({
  posts,
})
