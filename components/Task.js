import React from 'react'

export default function Task({ completed, onToggle, name, onClick }) {
  return (
    <li className='Task'>
      <input
        className='Task__checkbox'
        type='checkbox'
        checked={completed}
        onChange={onToggle}
      />
      <p
        onClick={onClick}
        className={'Task__name' + (completed ? ' Task__name--completed' : '')}
      >
        {name}
      </p>
    </li>
  )
}
