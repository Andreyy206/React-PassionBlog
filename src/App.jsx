import { BrowserRouter as router, Routes, Route, BrowserRouter, Router } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Single from "./components/pages/single/Single"
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:slug" element={<Single/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
