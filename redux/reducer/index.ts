import { combineReducers } from 'redux'
import { PostsState, PostState } from '../../types'
import posts from './posts'
import post from './post'

export type RootState = {
  posts: PostsState
  post: PostState
}

export default combineReducers({
  posts,
  post,
})
