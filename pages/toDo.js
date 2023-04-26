// import React, { useState, useEffect } from 'react'

// export default function toDo() {
//   const [todos, setTodos] = useState([])
//   const [tempText, setTempText] = useState()

//   // att do do function
//   const AddTodo = (text, string) => {
//     //keep todos and append text as new todo
//     setTodos([todos, text])
//   }

//   useEffect(() => {
//     console.log(todos)
//   }, [todos])
//   //e.target.value kan vi änvanda för hämta data från form in på ett dynamisk sett
//   return (
//     <div style={{ display: 'flex' }}>
//       <input
//         type="text"
//         value={tempText}
//         placeholder="Add to do"
//         onChange={(e) => {
//           setTempText(e.target.value)
//         }}
//       />
//       <button
//         onClick={() => {
//           AddTodo(tempText)
//           setTempText('')
//         }}
//       >
//         Add
//       </button>
//       <li>
//         {todos.map((elem, i) => {
//           return <li>{elem}</li>
//         })}
//       </li>
//     </div>
//   )
// }

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
          {
              todo&&todo.map((text,i)=>{
                  return(
                      <h1>{text}</h1>
                  )

              })

          }
      </li>
    </div>
  )
}
