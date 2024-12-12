import Header from "./components/Header"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import Partners from "./Partners"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Partners/>
    </BrowserRouter>
  )
}

export default App
