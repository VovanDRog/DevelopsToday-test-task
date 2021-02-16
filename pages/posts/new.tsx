import NewPost from '../../components/NewPost'
import styled from 'styled-components'
import { Fragment } from 'react'
import Head from 'next/head'

const H1 = styled.h1`
  margin-top: 50px;
  text-align: center;
`

function NewPostPage(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>New post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <H1>New post</H1>
        <NewPost />
      </div>
    </Fragment>
  )
}

export default NewPostPage
