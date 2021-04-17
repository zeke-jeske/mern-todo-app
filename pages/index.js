import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Task from 'components/Task'
import Modal from 'components/Modal'
import NewTaskForm from 'components/NewTaskForm'

const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 2rem;
`

const List = styled.div`
  padding: 0 2rem;
`

const EmptyMsg = styled.p`
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  color: #888a8f;
`

const API_ENDPOINT = '/api/tasks'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState([])
  const [modalIsOpen, setIsModalOpen] = useState(false)
  const [activeTask, setActiveTask] = useState(0)

  // fetch all tasks on initial render
  useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then((res) => {
        setTasks(res.data)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function toggleTask(index = activeTask) {
    const completed = !tasks[index].completed
    updateTask({ completed }, index)
  }

  function updateTask(props, index = activeTask) {
    const { _id } = tasks[index]
    const oldTasks = tasks
    const newTasks = [...tasks]
    newTasks[index] = { ...newTasks[index], ...props }

    setTasks(newTasks)

    axios.patch(API_ENDPOINT + '/' + _id, props).catch((err) => {
      console.log(err)
      setTasks(oldTasks) // undo changes to state
    })
  }

  function deleteTask(index = activeTask) {
    const { _id } = tasks[index]
    const oldTasks = tasks
    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    setTasks(newTasks)
    setIsModalOpen(false)

    axios.delete(API_ENDPOINT + '/' + _id).catch((err) => {
      console.log(err)
      setTasks(oldTasks) // undo changes to state
    })
  }

  function createTask(name) {
    const oldTasks = tasks
    const newTask = {
      name,
      completed: false,
      description: '',
    }
    setTasks([...oldTasks, { ...newTask, _id: -1 }])

    axios
      .post(API_ENDPOINT, newTask)
      .then((res) => setTasks([...oldTasks, res.data]))
      .catch((err) => {
        console.log(err)
        setTasks(oldTasks)
      })
  }

  return (
    <Container className='container'>
      <Heading>To-do</Heading>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <List>
            <ul>
              {tasks.length ? (
                tasks.map(({ _id, ...props }, index) => (
                  <Task
                    key={_id}
                    {...props}
                    onToggle={() => toggleTask(index)}
                    onClick={() => {
                      setActiveTask(index)
                      openModal()
                    }}
                  />
                ))
              ) : (
                <EmptyMsg>
                  You don't have any tasks yet! Click "Add a task" to create
                  one. ↓
                </EmptyMsg>
              )}
            </ul>
            <NewTaskForm onSubmit={createTask} />
          </List>
          <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onToggle={() => toggleTask()}
            onUpdate={updateTask}
            onDelete={deleteTask}
            task={tasks[activeTask]}
          />
        </>
      )}
    </Container>
  )
}
