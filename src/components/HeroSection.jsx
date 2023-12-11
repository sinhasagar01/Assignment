import TextBlock from "./ui/TextBlock/TextBlock.jsx";
import InfiniteCarousel from "./ui/InfiniteCarousel/InfiniteCarousel.jsx";
import { useEffect } from 'react';

function HeroSec({ textData, infiniteCarousel }) {

  const textBlockElem = textData.map(data => {
    return (
      <TextBlock
        key={data.id}
        {...data}
      />
    )
  })
  const infiniteCarouselBlock = infiniteCarousel.map(data => {
    return (
      <InfiniteCarousel
        key={data.id}
        {...data}
      />
    )
  })
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-text">
        {textBlockElem}
      </div>
      <div className='scroller' data-speed="slow" data-direction="left">
        <ul className='tag-list scroller__inner'>
          {infiniteCarouselBlock}
        </ul>
      </div>
    </div>
  )
}

export default HeroSec;