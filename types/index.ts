export interface IState {
  posts: PostsState
}

export interface PostsState {
  list: Array<IPost>
}

export interface IPost {
  id: number | string
  title: string
  body: string
  comments?: Array<any>
}

export type PostsAction = {
  type: string
  payload: IPost[]
}
