export interface Date {
  year: number
  month: number
  day: number
}

export interface Task {
  completed: boolean
  name: string
  description: string
  dueDate?: Date
}

export interface TaskWithID extends Task {
  _id: string
}