import { useState, useEffect } from "react";
import axios from 'axios';

import TodoItem from "./components/TodoItem";

const API = 'http://localhost:3000/api/todos'

const App = () => {
  	const [todos, setTodos] = useState([]);
  	const [text, setText] = useState('');

	const fetchTodos = async () => {
		const res = await axios.get(API);
		setTodos(res.data);
	}

	useEffect(() => {
		fetchTodos()
	}, [])

	const addTodo = async () => {
		if(text.trim() === '') return;
		await axios.post(API, {text});

		setText('');
		fetchTodos();
	}

	const deleteTodo = async (id) => {
		await axios.delete(`${API}/${id}`);
		fetchTodos();
	}

	const toggleDone = async (id, done) => {
		await axios.post(`${API}/${id}`, {done : !done});
		fetchTodos();
	}

  return (
	<div className="bg-gray-900 h-screen w-screen">
		<div className="w-full flex flex-col items-center">
      		<h1 className="text-gray-50 font-semibold text-5xl sm:text-6xl py-10">Todo List</h1>
			<div className="">
      			<input 
				className="bg-gray-200 px-5 py-2 w-80 md:w-2xl my-10 focus:outline-none"
				id="textInput"
        		value={text} 
        		placeholder="Add a new task"
        		onChange={(e) => setText(e.target.value)}
      			/>
      			<button 
					className="bg-cyan-500 text-gray-50 px-5 py-2 rounded-xs cursor-pointer"
					onClick={addTodo}
				>Add</button>
			</div>

			{
				todos.map(todo => (
					<TodoItem 
						key={todo._id}
						todo={todo}
						onDelete={deleteTodo}
						onToggle={toggleDone}
					/>
				))
			}
		</div>
    </div>
  )
}

export default App