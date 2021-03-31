import React, { createRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import './index.scss'
import Button from 'Components/Button'

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
    <form
      onSubmit={save}
      className={`Field ${className}`}
      onBlur={handleBlur}
      ref={form}
    >
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
          <Button
            variant='primary'
            type='submit'
            disabled={required && value === ''}
          >
            {saveMsg}
          </Button>
          <Button
            variant='text'
            onClick={cancel}
            className='Field__cancel-button'
          >
            Cancel
          </Button>
        </>
      )}
    </form>
  )
}
