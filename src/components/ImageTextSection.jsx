import TextBlock from "./ui/TextBlock/TextBlock.jsx";

function ImageTextSection({ imageText }) {
  const imgTextBlockElem = imageText.map(data => {
    return (
      <TextBlock
        key={data.id}
        {...data}
      />
    )
  })
  return (
    <div className="image-text-section">
      <div className="img-block">
        <img src={imageText.map(data => data.banner)} alt="placeholder" />
      </div>
      <div className="text-block">
        {imgTextBlockElem}
      </div>
    </div>
  )
}

export default ImageTextSection;