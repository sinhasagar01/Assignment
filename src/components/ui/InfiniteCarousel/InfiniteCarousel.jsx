function InfiniteCarousel({ carouselImg }) {
  return (
    <li className='scroller__list'>
      <img src={`../images/${carouselImg}`} alt="images" />
    </li>
  )
}

export default InfiniteCarousel