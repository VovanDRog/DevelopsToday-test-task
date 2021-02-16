export interface IState {
  posts: PostsState
  post: PostState
}
export interface IPost {
  id: number | string
  title: string
  body: string
  // comments?: Array<any>
}

export interface PostsState {
  list: Array<IPost>
}

export interface PostState {
  item: IPost
}

export type PostsAction = {
  type: string
  payload: IPost[]
}

export type PostAction = {
  type: string
  payload: IPost
}

export type CreatePostType = {
  title: string
  body: string
}
