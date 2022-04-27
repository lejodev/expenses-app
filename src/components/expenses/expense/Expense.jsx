import React from 'react'

const Expense = ({expense}) => {
  return (
    <div data-testid="customId">
    <h2>{expense}</h2>
</div>
  )
}

export default Expense