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
  padding-bottom: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`

const Section = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    font-size: large;
    margin-bottom: 0.75rem;
  }
`

const TopSection = styled(Section)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 1rem;
`

const CheckboxWrapper = styled.div`
  padding: 0.5rem 0;
  font-size: 1.5rem;
  line-height: 1.25;
`

const NameField = styled(Field)`
  textarea {
    font-size: 1.5rem;
    background: initial;
  }
`

const DateField = styled(Field)`
  display: block;
`

const DeleteButtonWrapper = styled.div`
  button {
    width: 100%;
  }
`

ReactModal.setAppElement('#__next')

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
  const dateVal = task.dueDate?.toISOString().substring(0, 10)

  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Task details'
      className='container'
    >
      <InnerContainer>
        <TopSection>
          <CloseButton onClick={onClose} />
          <CheckboxWrapper>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={onToggle}
            />
          </CheckboxWrapper>
          <NameField
            onSave={(name) => onUpdate({ name })}
            initialValue={task.name}
            required={true}
          />
        </TopSection>
        <Section>
          <h2>Due date</h2>
          <DateField
            onSave={(dateStr) => onUpdate({ dueDate: new Date(dateStr) })}
            initialValue={dateVal}
            asInput={true}
            type='date'
          />
        </Section>
        <Section>
          <h2>Description</h2>
          <Field
            onSave={(description) => onUpdate({ description })}
            initialValue={task.description}
            multiLine={true}
            minRows={10}
            placeholder='Description'
          />
        </Section>
        <Section>
          <DeleteButtonWrapper>
            <DeleteButton onClick={() => onDelete()}>Delete Task</DeleteButton>
          </DeleteButtonWrapper>
        </Section>
      </InnerContainer>
    </Container>
  )
}
