import React from 'react'

const TodoItem = ({todo, onDelete, onToggle}) => {
    
  return (
    <div className={`w-96 md:w-2xl flex bg-gray-300 mb-2 ${todo.done ? 'bg-gray-500' : ''}`}>
      <div className='w-full flex items-center px-5 py-3 gap-2'>
        <input 
            className='size-5 cursor-pointer'
            name='markdone'
            type="checkbox" 
            checked={todo.done}
            onChange={() => onToggle(todo._id, todo.done)}
        />

        <span 
          className={`${todo.done ? 'line-through' : ''} font-semibold sm:text-xl`}
        >
            {todo.text}
        </span>

        </div>
        <button 
            className='font-medium mr-5 bg-red-500 cursor-pointer rounded-xs px-5 my-2'
            onClick={() => onDelete(todo._id)}
        >Remove</button>
    </div>
  )
}

export default TodoItem