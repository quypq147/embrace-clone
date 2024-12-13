import Header from "./components/Header"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import Partners from "./Partners"
import Commitments from "./Commitments"
import HowitsWork from "./HowItsWork"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Partners/>
      <Commitments/>
      <HowitsWork/>
    </BrowserRouter>
  )
}

export default App
