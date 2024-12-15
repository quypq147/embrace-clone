import Header from "./components/Header"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import Partners from "./Partners"
import Commitments from "./Commitments"
import HowitsWork from "./HowItsWork"
import OurWorks from "./OurWorks"
import CTABanner from "./CTABanner"
import OurTeam from "./OurTeam"
import Testimonial from "./Testimonial"
import CTABanner2 from "./CTABanner2"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Partners/>
      <Commitments/>
      <HowitsWork/>
      <OurWorks/>
      <CTABanner/>
      <OurTeam/>
      <Testimonial/>
      <CTABanner2/>
    </BrowserRouter>
  )
}

export default App
