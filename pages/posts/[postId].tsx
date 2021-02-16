import Head from 'next/head'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getPostById } from '../../actions'
import Post from '../../components/Post'
import { IState } from '../../types'

function PostPage(): JSX.Element {
  const { item } = useSelector((state: IState) => state.post)

  return (
    <Fragment>
      <Head>
        <title>{item.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Post item={item} />
      </div>
    </Fragment>
  )
}

PostPage.getInitialProps = async ({ query, store }) => {
  const { postId } = query
  await store.dispatch(getPostById(postId) as any)
}

export default PostPage
