import React from 'react'

export default function Calendar({date, setDate}) {
  return (
    <div>
      {date.format('DD-MMMM-YYYY')}
    </div>
  )
}
