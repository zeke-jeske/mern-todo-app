import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  line-height: 1;

  ${(props) =>
    props.variant === 'primary' &&
    `
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
  `}

  ${(props) =>
    props.variant === 'delete' &&
    `
    $color: #ef4444;

    color: $color;
    background-color: white;
    border: 1px solid $color;

    &:hover {
      background-color: $color;
      color: white;
    }

    &:focus {
      outline: #{$color}aa solid 3px;
    }
  `}

  ${(props) =>
    props.variant === 'text' &&
    `
    &:focus,
    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: 1px solid;
    }
  `}
`

const variants = ['primary', 'delete', 'text']

export default function Button({
  children,
  variant,
  className = '',
  type = 'button',
  onClick = () => {},
  disabled = false,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}
