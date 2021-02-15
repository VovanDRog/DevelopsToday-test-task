import styled from 'styled-components'
import { IPost } from '../../../types'

const Card = styled.div`
  min-width: 200px;
  padding: 15px 16px 30px;
  cursor: pointer;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &.scale:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 0.4em;
  line-height: 1.15em;
  // transition: color 0.2s ease-in-out;
`

const CardBody = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

type Props = {
  handleClick: (e: IPost) => void
  item: IPost
}

function PostListItem(props: Props): JSX.Element {
  const { item, handleClick } = props

  return (
    <Card onClick={() => handleClick(item)}>
      <CardTitle>{item.title}</CardTitle>
      <CardBody>{item.body}</CardBody>
    </Card>
  )
}

export default PostListItem
