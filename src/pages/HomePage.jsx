import HeroSec from "../components/HeroSection.jsx";
import ImageTextSection from "../components/ImageTextSection.jsx";
import Testimonial from "../components/TestimonialCarousel.jsx";
import SignUp from "../components/SignUp.jsx";

function HomePage({ data, textData, imageText, infiniteCarousel, signUpData }) {
  const signUpElem = signUpData.map(data => {
    return (
      <SignUp
        key={data.id}
        {...data}
      />
    )
  })

  return (
    <div className="home-page">
      <div className="content-section">
        <div className="content-fixed">
          <HeroSec textData={textData} infiniteCarousel={infiniteCarousel} />
          <ImageTextSection imageText={imageText} />
        </div>
        <div className="content-fluid">
          <Testimonial data={data} />
        </div>
      </div>
      <div className="signup-section">
        {signUpElem}
      </div>
    </div>
  );
}
export default HomePage;