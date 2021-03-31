import React from 'react'

export default function CloseButton({ onClick }) {
  return (
    <button
      type='button'
      aria-label='Close'
      className='CloseButton'
      onClick={onClick}
    >
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        aria-hidden='true'
        focusable='false'
        className='CloseButton__icon'
      >
        <path d='M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z' />
        <path d='M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z' />
      </svg>
    </button>
  )
}
