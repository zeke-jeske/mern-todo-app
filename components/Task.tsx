import React from 'react'
import styled from 'styled-components'
import Date from 'components/Date'
import { Task as TaskInterface } from 'ts/interfaces'

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

interface Props extends TaskInterface {
  onToggle: React.FormEventHandler<HTMLInputElement>
  onClick: React.FormEventHandler<HTMLParagraphElement>
}

export default function Task({
  completed,
  onToggle,
  name,
  onClick,
  dueDate,
}: Props) {
  return (
    <Container>
      <Checkbox type='checkbox' checked={completed} onChange={onToggle} />
      <Name onClick={onClick} completed={completed}>
        {name}
      </Name>
      <Date date={dueDate} />
    </Container>
  )
}
