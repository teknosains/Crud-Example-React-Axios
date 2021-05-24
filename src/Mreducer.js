import React, { useEffect, useReducer, useRef } from 'react'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      if (action.name.length) {
        return [...state, {
          id: Math.floor((Math.random() * 10) + 1),
          name: action.name,
          complete: false
        }]
      } else {
        return state
      }
    }
    case 'COMPLETED': {
      return state.map((item) => {
        if (item.id === action.id) {
          return {...item, complete: !item.complete}
        }
        return item
      })
    }
    default: {
      return state
    }
  }
}

const Mreducer = () => {
  
  const initState = []

  const [todos, dispatch] = useReducer(todoReducer, initState)

  const inputRef = useRef(null)

  const completedTodos = todos.filter(todo => todo.complete);
  useEffect(() => {
    // any action after the dom render
    document.title = `You completed ${completedTodos.length} task`
  }, [todos])

  const addTodo = (event) => {
    event.preventDefault()
    dispatch({
      type: 'ADD',
      name: inputRef.current.value,
      complete: false
    })
    
    inputRef.current.value = ''
  }

  const setCompleted = (id) => {
    dispatch({
      type: 'COMPLETED',
      id: id
    })
  }

 

  return (
    <>
    <ul>
      {
        todos.map((todo, idx) => (
          <li
          key={idx}
          onClick={() => setCompleted(todo.id)}
          className="link"
          title="Click to set Complete"
          >ID = {todo.id} - Name = {todo.name} - Complete = {todo.complete ? 'true':'false'}</li>
        ))
      }
    </ul>
    <div className="todo-input">
      <form onSubmit={addTodo}>
        <input ref={inputRef} type="search"
          id="add-todo" placeholder="Add Todo..." />
      </form>
    </div>
    </>
  )
}

export default Mreducer