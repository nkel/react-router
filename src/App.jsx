import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Layout/Header'
import { Route, Routes } from 'react-router'
import Contact from './Pages/Contact'
import { useEffect, useState } from 'react'
import { API_URL } from './config'

function App() {

  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    const getPosts = async () => {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        setPosts(data);
        console.log(data)
    }
    getPosts();
  },[])

  



  return (
    <>
     <Header />

     {counter}

   <button onClick={() => setCounter(prev=> prev+1)}>show posts</button>   
    
    <div>{posts.map( (item) => { return (<div key={item.id}>{item.title}</div>)} ) }</div>

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
