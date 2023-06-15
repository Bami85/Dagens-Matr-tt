import React, { useState } from 'react'

export default function ToDo(addTodo) {
  const [value, setValue]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
    console.log(value)
  };


  return (
    <div className="space-y-12 sm:space-y-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="what is your favorit dish"
          onChange={(e)=>setValue(e.target.value)}
        />
          <button type="submit" className="todo-btn">
            Submit
          </button>
      </form>
    </div>
  )
}
