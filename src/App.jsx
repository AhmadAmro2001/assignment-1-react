

import './App.css'
import LayOut from './components/Layout/LayOut'
import Home from './components/Home/Home'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Porto from './components/Porto/Porto'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  let x = createBrowserRouter([
    {path:"",element:<LayOut/>, children:[
      {index:true,element: <Home/>},
      {path:"porto",element: <Porto/>},
      {path:"about",element: <About/>},
      {path:"contact",element: <Contact/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={x}>

      </RouterProvider>
    </>
  )
}

export default App
