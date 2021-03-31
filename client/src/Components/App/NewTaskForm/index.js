import React, { useState } from 'react'
import Field from 'Components/Field'
import './index.scss'

export default function NewTaskForm({ onSubmit }) {
  const [active, setActive] = useState(false)

  return (
    <div className='NewTaskForm'>
      {active ? (
        <Field
          onClose={() => setActive(false)}
          onSave={onSubmit}
          saveMsg='Add'
          autoFocus={true}
          required={true}
        />
      ) : (
        <button
          type='button'
          onClick={() => setActive(true)}
          className='NewTaskForm__button'
        >
          + Add a task
        </button>
      )}
    </div>
  )
}
