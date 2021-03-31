import React from 'react'
import ReactModal from 'react-modal'

import './index.scss'
import CloseButton from './CloseButton'
import Field from 'Components/Field'
import Button from 'Components/Button'

ReactModal.setAppElement('#root')

export default function Modal({
  isOpen,
  onClose,
  onToggle,
  onUpdate,
  onDelete,
  task = {
    completed: false,
    name: '',
    description: '',
  },
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Task details'
      overlayClassName='Modal'
      className='Modal__container container'
    >
      <div className='Modal__inner-container'>
        <div className='Modal__close-button-wrapper'>
          <CloseButton onClick={onClose} />
        </div>
        <div className='Modal__checkbox-wrapper'>
          <input type='checkbox' checked={task.completed} onChange={onToggle} />
        </div>
        <Field
          onSave={(name) => onUpdate({ name })}
          initialValue={task.name}
          required={true}
          className='Modal__name-field'
        />
        <Field
          onSave={(description) => onUpdate({ description })}
          initialValue={task.description}
          multiLine={true}
          minRows={10}
          placeholder='Description'
          className='Modal__description-field'
        />
        <div className='Modal__delete-button-wrapper'>
          <Button variant='delete' onClick={() => onDelete()}>
            Delete Task
          </Button>
        </div>
      </div>
    </ReactModal>
  )
}
