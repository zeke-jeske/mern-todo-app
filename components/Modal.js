import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import CloseButton from 'components/CloseButton'
import Field from 'components/Field'
import { DeleteButton } from 'components/Button'

const Container = styled(ReactModal)`
  padding: 2rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-row-gap: 1.25rem;
  align-content: start;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`

const CheckboxWrapper = styled.div`
  grid-row-start: 1;
  padding: 0.5rem;
  padding-left: 0;
  font-size: 1.5rem;
  line-height: 1.25;
`

const NameField = styled(Field)`
  grid-column-start: 2;
  grid-row-start: 1;

  textarea {
    font-size: 1.5rem;
  }
`

const DescriptionField = styled(Field)`
  grid-column: span 3 / span 3;

  textarea {
    background: #e5e7eb;
  }
`

const DeleteButtonWrapper = styled.div`
  grid-column: span 3 / span 3;

  button {
    width: 100%;
  }
`

// TODO: Fix modal root element
// ReactModal.setAppElement('#root')

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
    <Container
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Task details'
      className='container'
    >
      <InnerContainer>
        <div>
          <CloseButton onClick={onClose} />
        </div>
        <CheckboxWrapper>
          <input type='checkbox' checked={task.completed} onChange={onToggle} />
        </CheckboxWrapper>
        <NameField
          onSave={(name) => onUpdate({ name })}
          initialValue={task.name}
          required={true}
        />
        <DescriptionField
          onSave={(description) => onUpdate({ description })}
          initialValue={task.description}
          multiLine={true}
          minRows={10}
          placeholder='Description'
        />
        <DeleteButtonWrapper>
          <DeleteButton onClick={() => onDelete()}>Delete Task</DeleteButton>
        </DeleteButtonWrapper>
      </InnerContainer>
    </Container>
  )
}
