import './App.css'
import Category from './Components/Category'
import Food from './Components/Foods/Foods'
import { Footer } from './Components/Footer'
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
      <Category />
      <Footer />
    </>
  )
}

export default App
