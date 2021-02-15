import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IPost, IState } from '../../types'
import PostListItem from './PostListItem'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
`

function PostList(): JSX.Element {
  const posts = useSelector((state: IState) => state.posts.list)
  const router = useRouter()

  function handleClick({ id }) {
    router.push({
      pathname: `/posts/${id}`,
    })
  }

  return (
    <Wrapper>
      {posts.map((post: IPost) => (
        <PostListItem key={post.id} item={post} handleClick={handleClick} />
      ))}
    </Wrapper>
  )
}

export default PostList
