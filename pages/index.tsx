import { NextPageContext } from 'next'
import Head from 'next/head'
import { getPostsList } from '../actions'
import PostList from '../components/PostList'
import styled from 'styled-components'
import { Fragment } from 'react'
import Link from 'next/link'

const Main = styled.main`
  padding: 50px 10rem 20px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const H1 = styled.h1`
  display: inline;
`

const NewPostLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

function Home(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Latest Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <H1>Latest Posts</H1>
          <Link href="/posts/new">
            <NewPostLink>Create new post</NewPostLink>
          </Link>
        </Header>
        {/* <div>Home</div> */}
        <PostList />
      </Main>
    </Fragment>
  )
}

Home.getInitialProps = async ({ store }: NextPageContext) => {
  await store.dispatch(getPostsList() as any)
}

export default Home
