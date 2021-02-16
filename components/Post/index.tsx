import Link from 'next/link'
import styled from 'styled-components'
import { IPost } from '../../types'

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 720px;
  padding: 50px 20px;
`

const PostContent = styled.div`
  font-size: 18px;
`

const BackLink = styled.a`
  clear: both;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ArrowLeft = styled.i`
  margin: 0 2px 1px 0;
  border: solid black;
  border-width: 2px 0 0 2px;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
`

type Props = {
  item: IPost
}

function Post({ item }: Props): JSX.Element {
  return (
    <Wrapper>
      <Link href="/">
        <BackLink>
          <ArrowLeft />
          Back
        </BackLink>
      </Link>
      <h1>{item.title}</h1>
      <PostContent>{item.body}</PostContent>
    </Wrapper>
  )
}

export default Post
