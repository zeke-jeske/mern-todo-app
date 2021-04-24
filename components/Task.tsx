import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;
`

const Checkbox = styled.input`
  margin: 1rem;
`

const Name = styled.p`
  flex: 1;
  margin: 0;
  padding: 1rem 0;
  min-height: 3rem;
  cursor: pointer;

  ${(props) =>
    props.completed &&
    `
    text-decoration: line-through;
    color: #888a8f;
  `}
`

const DueDate = styled.time`
  font-weight: bold;
  font-size: small;
`

interface Props {
  completed: boolean
  onToggle: React.FormEventHandler<HTMLInputElement>
  name: string
  onClick: React.FormEventHandler<HTMLParagraphElement>
  dueDate?: Date
}

export default function Task({
  completed,
  onToggle,
  name,
  onClick,
  dueDate,
}: Props) {
  console.log(typeof dueDate)
  return (
    <Container>
      <Checkbox type='checkbox' checked={completed} onChange={onToggle} />
      <Name onClick={onClick} completed={completed}>
        {name}
      </Name>
      {dueDate && (
        <DueDate dateTime={dueDate.toString()}>
          {new Intl.DateTimeFormat().format(dueDate)}
        </DueDate>
      )}
    </Container>
  )
}
