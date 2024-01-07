import './App.css'
import Food from './Components/Foods/Foods'
import { HeadLines } from './Components/Headlines/HeadLines'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HeadLines />
      <Food />
    </>
  )
}

export default App
