import styled, { css } from 'styled-components'
import FieldWrapper from './FieldWrapper'

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 12px;
  border-width: 1px;
  border-radius: 3px;
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
  type: string
  // value: string | undefined
  placeholder: string
  invalid: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField(props: Props): JSX.Element {
  return (
    <FieldWrapper {...props}>
      <Input {...props} id={props.name} />
    </FieldWrapper>
  )
}

InputField.defaultProps = {
  type: 'text',
}

export default InputField
