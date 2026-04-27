import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Layout/Header'
import { Route, Routes } from 'react-router'
import Contact from './Pages/Contact'

function App() {
  

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={ <h1>Home Page</h1> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/about' element={ <h1>About Us Page</h1> } />
      <Route path='/products' element={ <h1>Products Page</h1> } />
      
      <Route path='*' element={ <h1>404 page</h1> } />
     </Routes>
    </>
  )
}

export default App
