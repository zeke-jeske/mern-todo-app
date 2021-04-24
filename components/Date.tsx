import styled from 'styled-components'
import dateToISO from 'utils/date-to-iso'
import dateToString from 'utils/date-to-string'
import { Date } from 'ts/interfaces'
import React from 'react'

const Button = styled.button`
  font-size: small;
  border-radius: 4px;
  color: #444;
  border: 1px solid;
  padding: 0.25rem 0.5rem;
`

interface Props {
  date?: Date
}

export default function DateComponent({ date }: Props) {
  const [active, setActive] = React.useState(false)

  return (
    <Button disabled>
      <time dateTime={dateToISO(date)}>{dateToString(date)}</time>
    </Button>
  )
}
