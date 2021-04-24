import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column-start: 3;
`

const Button = styled.button`
  padding: 0.75rem;
  margin-top: -1rem;
  margin-right: -1rem;
  border-radius: 50%;
  display: flex;

  &:hover,
  &:focus {
    background: #e5e7eb;
  }
`

const Icon = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
`

export default function CloseButton({ onClick }) {
  return (
    <Wrapper>
      <Button type='button' aria-label='Close' onClick={onClick}>
        <Icon
          width='44'
          height='44'
          viewBox='0 0 44 44'
          aria-hidden='true'
          focusable='false'
        >
          <path d='M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z' />
          <path d='M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z' />
        </Icon>
      </Button>
    </Wrapper>
  )
}
