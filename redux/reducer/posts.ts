import { PostsAction, PostsState } from '../../types'

const initialState: PostsState = { list: [] }

function posts(state = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case 'GET_POSTS_LIST':
      return { ...state, list: action.payload }

    default:
      return state
  }
}

export default posts
