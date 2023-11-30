import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
import AddTodo from './AddTodo'
import { Link } from 'react-router-dom'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const Editbutton=(e)=>{
      <AddTodo/>
    }

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center px-4 py-2 rounded"
            key={todo.id}
          >


<div className="bg-white rounded-lg shadow-md p-6 mb-6 px-10 mx-auto">
      <h2 className="text-2xl font-bold mb-2">{todo.text.input}</h2>
      <p className="text-gray-600 mb-4">{todo.text.description}</p>
      <div className="flex items-center mb-4">
      <span className={`text-sm ${todo.text.priority === 'High' ? 'text-red-500' : 'text-green-500'}`}>
          Priority:{todo.text.priority}
        </span>
      </div>
      <div className="flex items-center space-x-4">
      <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button> 
        <button
          onClick={Editbutton}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Edit
        </button>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2 text-gray-700">Completed</span>
        </label>
      </div>
    </div>

          </li>
        ))}
      </ul>

      <Link to='/' ><button className= "my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button></Link>

    </>
  )
}

export default Todos