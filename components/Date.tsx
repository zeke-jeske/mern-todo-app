import styled from 'styled-components'
import dateToISO from 'utils/date-to-iso'
import dateToString from 'utils/date-to-string'
import { Date } from 'ts/interfaces'

const Time = styled.time`
  font-weight: bold;
  font-size: small;
`

interface Props {
  date?: Date
}

export default function DateComponent({ date }: Props) {
  return <Time datetime={dateToISO(date)}>{dateToString(date)}</Time>
}
