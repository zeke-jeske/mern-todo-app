function padNum(num: number, len: number): string {
  return num.toString().padStart(len, '0')
}

export default function dateToISO(date?: { year: number, month: number, day: number }): string | undefined {
  return (
    date &&
    `${padNum(date.year, 4)}-${padNum(date.month, 2)}-${padNum(date.day, 2)}`
  )
}