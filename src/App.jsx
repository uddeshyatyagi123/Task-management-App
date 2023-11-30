import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: '',
    children: [
      {
        path:'',
        element:<AddTodo/>
      },
      {
        path: "Todos",
        element: <Todos/>
      },
    ],
  },
]);

function App() {
  
  return (
    <>
  <RouterProvider router = {router}/>
    </>
  )
}

export default App