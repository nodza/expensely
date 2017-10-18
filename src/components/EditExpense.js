import React from 'react';

const EditExpense = (props) => {
  return (
    <div>Edit expense with id {props.match.params.id}</div>
  )
}

export default EditExpense;