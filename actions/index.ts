import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import client from '../axiosConfig'
import { CreatePostType, IState, IPost } from '../types'

type FunctionType = ThunkAction<unknown, IState, unknown, Action<string>>

export const getPostsList = (): FunctionType => async (dispatch) => {
  return await client
    .get('posts')
    .then(({ data }) => data)
    .then((items) =>
      dispatch({
        type: 'GET_POSTS_LIST',
        payload: items,
      })
    )
    .catch(() =>
      dispatch({
        type: 'GET_POSTS_LIST',
        payload: [],
      })
    )
}

export const getPostById = (id: string | number): FunctionType => async (dispatch) => {
  return await client
    .get(`posts/${id}`)
    .then(({ data }) => data)
    .then((items) =>
      dispatch({
        type: 'GET_POST',
        payload: items,
      })
    )
    .catch(() =>
      dispatch({
        type: 'GET_POST',
        payload: {},
      })
    )
}

export const createPost = async (postData: CreatePostType): Promise<IPost> => {
  return await client
    .post('posts', postData)
    .then((res) => res.data)
    .catch(() => ({}))
}
