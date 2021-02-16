import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 6px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ invalid }) =>
    invalid &&
    css`
      color: rgb(255, 0, 0);
    `}
`

type Props = {
  label: string | undefined
  name: string
  invalid: boolean
  children: JSX.Element
}

function FieldWrapper(props: Props): JSX.Element {
  const { label, children, name, invalid } = props

  return (
    <Wrapper>
      {label && (
        <Label htmlFor={name} invalid={invalid}>
          {label}
        </Label>
      )}
      {children}
    </Wrapper>
  )
}

export default FieldWrapper
