import './App.css'
import HomePage from './pages/HomePage.jsx'
// data
import testimonialData from "./data/testimonials.js"
import textBlockData from "./data/heroText.js"
import imageTextSectionData from "./data/imageTextSection02.js"
import infiniteCarousel from "./data/infiniteCarousel.js"
import signUpData from "./data/signUpForm.js"



function App() {
  return (
    <div className="container">
      <HomePage data={testimonialData} textData={textBlockData} imageText={imageTextSectionData} infiniteCarousel={infiniteCarousel} signUpData={signUpData} />
    </div>
  )
}

export default App
