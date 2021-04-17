import React, { useState } from 'react'
import Field from 'components/Field'
import styled from 'styled-components'

const StyledField = styled(Field)`
  margin-top: 0.75rem;
`

const Button = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.75rem;
  min-height: 3rem;

  &:hover {
    background: #f3f4f6;
  }
`

export default function NewTaskForm({ onSubmit }) {
  const [active, setActive] = useState(false)

  return (
    <div>
      {active ? (
        <StyledField
          onClose={() => setActive(false)}
          onSave={onSubmit}
          saveMsg='Add'
          autoFocus={true}
          required={true}
        />
      ) : (
        <Button type='button' onClick={() => setActive(true)}>
          + Add a task
        </Button>
      )}
    </div>
  )
}
