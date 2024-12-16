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
import Help from "./Help"
import Bottom from "./Bottom"
import Footer from "./Footer"

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
      <Help/>
      <Bottom/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
