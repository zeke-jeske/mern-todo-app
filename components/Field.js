import React, { createRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

import { PrimaryButton, TextButton } from 'components/Button'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  &:not(:focus-within) {
    textarea {
      border-color: transparent;
    }
  }

  textarea {
    width: 100%;
    margin-bottom: 0.75rem;
    resize: none;
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
  ...props
}) {
  const [value, setValue] = useState(initialValue)
  const [active, setActive] = useState(false)
  const form = createRef(null)
  let textarea

  function save(e) {
    e.preventDefault()
    textarea.blur()
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
    if (!form.current.contains(e.relatedTarget)) {
      // if focus leaves the form
      cancel()
    }
  }

  function handleChange(e) {
    if (!multiLine && e.nativeEvent.inputType === 'insertLineBreak') save(e)
    else setValue(e.target.value)
  }

  return (
    <Form onSubmit={save} className={className} onBlur={handleBlur} ref={form}>
      <TextareaAutosize
        onChange={handleChange}
        onFocus={() => setActive(true)}
        minRows={minRows}
        value={value}
        required={required}
        ref={(tag) => (textarea = tag)}
        {...props}
      />
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
