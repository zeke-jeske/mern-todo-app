import React, { createRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

import { PrimaryButton, TextButton } from 'components/Button'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  &:not(:focus-within) {
    textarea,
    input {
      border-color: transparent;
    }
  }

  textarea,
  input {
    width: 100%;
    margin-bottom: 0.75rem;
    resize: none;
    background: #f0f1f4;
  }
`

const CancelButton = styled(TextButton)`
  margin-left: 0.75rem;
`

export default function Field({
  onSave,
  onClose = () => {},
  className = '',
  initialValue = '',
  saveMsg = 'Save',
  minRows = 1.5,
  required = false,
  multiLine = false,
  asInput = false,
  ...props
}) {
  const [value, setValue] = useState(initialValue)
  const [active, setActive] = useState(false)
  const formRef = createRef(null)
  const inputRef = createRef(null)
  let textarea

  function save(e) {
    e.preventDefault()

    if (asInput) inputRef.current.blur()
    else textarea.blur()

    setActive(false)
    onSave(value)
    onClose()
  }

  function cancel() {
    setValue(initialValue)
    setActive(false)
    onClose()
  }

  function handleBlur(e) {
    if (!formRef.current.contains(e.relatedTarget)) {
      // if focus leaves the form
      cancel()
    }
  }

  function handleChange(e) {
    if (!multiLine && e.nativeEvent.inputType === 'insertLineBreak') save(e)
    else setValue(e.target.value)
  }

  return (
    <Form
      onSubmit={save}
      className={className}
      onBlur={handleBlur}
      ref={formRef}
    >
      {asInput ? (
        <input
          onChange={handleChange}
          onFocus={() => setActive(true)}
          value={value}
          required={required}
          ref={inputRef}
          {...props}
        />
      ) : (
        <TextareaAutosize
          onChange={handleChange}
          onFocus={() => setActive(true)}
          minRows={minRows}
          value={value}
          required={required}
          ref={(tag) => (textarea = tag)}
          {...props}
        />
      )}
      {active && (
        <>
          <PrimaryButton type='submit' disabled={required && value === ''}>
            {saveMsg}
          </PrimaryButton>
          <CancelButton onClick={cancel}>Cancel</CancelButton>
        </>
      )}
    </Form>
  )
}
