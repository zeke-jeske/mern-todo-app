import React from 'react'
import './index.scss'

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
    <button
      className={
        'Button ' +
        className +
        (variant && variants.includes(variant) ? ` Button--${variant}` : '')
      }
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
