export default function dateToString(date?: { year: number, month: number, day: number}): string {
  if (!date) return 'No date'

  const day = new Date(date.year, date.month, date.day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const daysAway = (day.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  let options = {}

  if (daysAway === 0) return 'Today'
  else if (daysAway === 1) return 'Tomorrow'
  else if (daysAway === -1) return 'Yesterday'
  else if (daysAway > 0 && daysAway <= 7) options = { weekday: 'long' }
  else if (day.getFullYear() === today.getFullYear())
    options = { month: 'short', day: 'numeric' }
  else options = { year: 'numeric', month: 'short', day: 'numeric' }

  return new Intl.DateTimeFormat(undefined, options).format(day)
}