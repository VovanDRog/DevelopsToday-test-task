import { PostsAction, PostState, IPost } from '../../types'

const initialState: PostState = { item: <IPost>{} }

function post(state = initialState, action: PostsAction): PostState {
  switch (action.type) {
    case 'GET_POST':
      return { ...state, item: action.payload }

    default:
      return state
  }
}

export default post
