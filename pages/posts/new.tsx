import NewPost from '../../components/NewPost'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 50px;
  text-align: center;
`

function NewPostPage(): JSX.Element {
  return (
    <div>
      <H1>New post</H1>
      <NewPost />
    </div>
  )
}

export default NewPostPage
