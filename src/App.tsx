import { createBrowserRouter } from 'react-router-dom'
import {RouterProvider} from  'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Servise from './pages/Servise/Servise'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Story from './pages/Story/Story'
import Career from './pages/Career/Career'

const App = () => {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : "About",
          element:<About/>
        },
        {
          path : "Gallery",
          element:<Gallery/>
        },
        {
          path : "Contact",
          element:<Contact/>
        },
        {
          path : "News",
          element : <News/>
        },
        {
          path : "Story",
          element : <Story/>
        },
        {
          path : "Career",
          element : <Career/>
        } ,
        {
          path : "Service",
          element : <Servise/>
        }
      ]
    }
  ])

  return (<RouterProvider router={router}/>)
}

export default App