import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Newsitem from './Components/Newsitem'
import Footer from './Components/Footer'





function App() {
  const [count, setCount] = useState(0)
  const [category,setCategory]=useState("general")

  return (
   <div>
    <h1 className="text-3xl font-bold underline">
    
    </h1>
    
    <Navbar/>
    <NewsBoard setCategory={setCategory}/>
    <Newsitem category={category}/>
    <Footer/>
   </div>
  )
}

export default App
