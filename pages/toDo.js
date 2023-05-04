import React, { useEffect, useState } from 'react'

export default function Home() {
  const [todo, setTodo] = useState([])
  const [tempText, setTemText] = useState()

  useEffect(() => {
    console.log(todo)
  }, [todo])

  // Add a AddTodo function
  const Addtodo = (text, string) => {
    setTodo([todo, text])
  }

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="text"
        value={tempText}
        placeholder="add to do list"
        onChange={(e) => {
          setTemText(e.target.value)
        }}
      />

      <button
        onClick={() => {
          Addtodo(tempText)
          setTemText('')
        }}
      >
        Add to do list
      </button>

      <li>
        {todo &&
          todo.map((text, i) => {
            return <h1>{text}</h1>
          })}
      </li>
    </div>
  )
}


