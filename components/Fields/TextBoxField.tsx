import styled, { css } from 'styled-components'
import FieldWrapper from './FieldWrapper'

const TextBox = styled.textarea`
  width: 100%;
  max-height: ${(props) => props.maxHeight || 250}px;
  padding: 8px 12px;
  margin-bottom: 12px;
  border-width: 1px;
  border-radius: 3px;
  resize: vertical;
  font-size: 16px;

  ${({ invalid }) =>
    invalid &&
    css`
      border: 1px solid rgb(255, 0, 0);
      color: rgb(255, 0, 0);
      &::placeholder {
        color: rgba(255, 0, 0, 0.7);
      }
    `}
`

type Props = {
  label: string | undefined
  name: string
  // value: string | undefined
  placeholder: string
  invalid: boolean
  rows: number
  cols: number
  maxHeight: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TextBoxField(props: Props): JSX.Element {
  return (
    <FieldWrapper {...props}>
      <TextBox {...props} id={props.name} />
    </FieldWrapper>
  )
}

TextBoxField.defaultProps = {
  rows: 4,
  cols: 50,
  maxHeight: 250,
}

export default TextBoxField
