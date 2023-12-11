
function TextBlock({ icon, title, subtitle }) {

  return (
    <>
      <img className="text-block__img" src={`../icons/${icon}`} alt="icon" />
      <h1 className="text-block__title">{title}</h1>
      <p className="text-block__text">{subtitle}</p>
    </>
  );
}

export default TextBlock;