import React, { useState } from 'react'

const Hook = () => {

  const todosData = []
  
  const Initdata = {title: '', item: ''}

  const [todos, setTodos] = useState(todosData)
  const [data, setData] = useState(Initdata)
  
  const addTodo = (todo) => {
    setTodos([...todos, todo])
    // reset the form
    setData({title: '', item: ''})
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setData({...data, [name]: value})
  }

  const List = (props) => {
    const rows = props.list.map((val, idx) => {
          return <li key={idx}>Title:{val.title}, Item:{val.item}</li>
        })
    
     return <ul>{rows}</ul>
  }


  return (   
    <div>
      <h3>Todo App using React Hooks</h3>
      <List list={todos}/>
      <input
        type="text"
        name="title"
        value={data.title}
        placeholder="Title"
        onChange={handleChange}
        />
      <input
        type="text"
        name="item"
        value={data.item}
        placeholder="Item"
        onChange={handleChange}
        />    
      <button onClick={(e) => {
          e.preventDefault()
          if (!data.title || !data.item) return
          addTodo(data)}     
        }>Submit</button>
    </div>
  )
}

export default Hook