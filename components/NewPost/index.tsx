import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { createPost } from '../../actions'
import InputField from '../Fields/InputField'
import TextBoxField from '../Fields/TextBoxField'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 40px auto;
`

const SubmitButton = styled.button`
  padding: 8px 16px;
  margin-top: 12px;
  background-color: #00d100;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const BackButton = styled(SubmitButton)`
  background-color: #2f4fff;
`

type ErrorsType = {
  title: boolean
  body: boolean
}

type ValuesType = {
  title: string
  body: string
}

function NewPost(): JSX.Element {
  const router = useRouter()

  const [formValues, setFormValues] = useState<ValuesType>({
    title: '',
    body: '',
  })
  const [formErrors, setFormErrors] = useState<ErrorsType>({
    title: false,
    body: false,
  })

  function handleInputChange({ target: { value, name } }) {
    setFormErrors((prev) => ({
      ...prev,
      [name]: false,
    }))
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleBackClick(e: React.FormEvent) {
    e.preventDefault()
    router.push('/')
  }

  function validate() {
    const fields = ['title', 'body']
    const errors = {}
    fields.forEach((field) => {
      if (
        formValues[field] === undefined ||
        formValues[field] === '' ||
        formValues[field].trim() === '' ||
        formValues[field].trim().length < 3
      ) {
        errors[field] = true
      }
    })
    return errors
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const errors = validate()

    if (Object.keys(errors).length) {
      return setFormErrors(errors as ErrorsType)
    } else {
      asyncPostCreate()
    }
  }

  async function asyncPostCreate() {
    const res = await createPost(formValues)
    if (res && res.id) {
      router.push(`/posts/${res.id}`)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="Enter post title"
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
        invalid={formErrors.title}
      />

      <TextBoxField
        label="Enter post body"
        name="body"
        placeholder="Body"
        onChange={handleInputChange}
        invalid={formErrors.body}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
      <BackButton onClick={handleBackClick}>Back</BackButton>
    </Form>
  )
}

export default NewPost
