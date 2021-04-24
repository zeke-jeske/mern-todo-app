import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.75rem 1rem;
  line-height: 1;
`

export default Button

export const PrimaryButton = styled(Button)`
  background: #3b82f6;
  color: white;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    background: #d1d5db;
    color: #1f2937;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`

export const DeleteButton = styled(Button)`
  --color: #ef4444;

  color: var(--color);
  background-color: white;
  border: 1px solid var(--color);

  &:hover {
    background-color: var(--color);
    color: white;
  }

  &:focus {
    outline: var(--color) aa solid 3px;
  }
`

export const TextButton = styled(Button)`
  &:focus,
  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 1px solid;
  }
`
