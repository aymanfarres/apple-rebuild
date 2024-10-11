import Accordion from "./components/Accordion"
import SmallVideoCarousel from "./components/Carrasoul"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Usps from "./components/Usps"
import VideoCarassol from "./components/VideoCarassol"
import { movies } from "./components/mouvies" 


function App() {
 

  return (
   <>
   <Header/>
   <main className="min-h-[] ">
   
    <div className="bg-background relative z-10">
    <Hero/>
    <Usps />
    <Pricing/>
    
    </div>
    <div className="bg-background">
    <VideoCarassol/>
    <SmallVideoCarousel movies={movies} />
    
    </div >
    <div className="bg-background">
      <Accordion/>
    <Footer/> 
    </div>
    
     
     
   </main>
   
   </>
  )
}

export default App
