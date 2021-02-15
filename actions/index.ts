import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import client from '../axiosConfig'
import { IState } from '../types'

type FunctionType = ThunkAction<unknown, IState, unknown, Action<string>>

export const getPostsList = (): FunctionType => async (dispatch) => {
  return await client
    .get('posts')
    .then(({ data }) => data)
    .then((items) => {
      return dispatch({
        type: 'GET_POSTS_LIST',
        payload: items,
      })
    })
}

export const getPostById = (id: string | number): FunctionType => async (dispatch) => {
  return await client
    .get(`posts/${id}?_embed=comments'`)
    .then(({ data }) => data)
    .then((items) => {
      return dispatch({
        type: 'GET_POST',
        payload: items,
      })
    })
  // console.log("🚀 data", data.length)
}
