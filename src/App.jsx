import { BrowserRouter as router, Routes, Route, BrowserRouter, Router } from "react-router-dom"
import Home from "./components/pages/home/Home"
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
