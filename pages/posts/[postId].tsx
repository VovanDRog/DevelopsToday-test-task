import { getPostById } from '../../actions'
import Post from '../../components/Post'

function PostPage(): JSX.Element {
  return (
    <div>
      <Post />
    </div>
  )
}

PostPage.getInitialProps = async ({ query, store }) => {
  const { postId } = query
  await store.dispatch(getPostById(postId) as any)
}

export default PostPage
