import './Tags.css';

const Tags = () => {
  return (
    <div className="d-flex flex-wrap col-lg-4 col-md-8 tag-container left-animation ">
      <div className="tag text-lightBlack bg-secondaryColor">HTML5</div>
      <div className="tag text-clearWhite bg-mainColor">CSS3</div>
      <div className="tag text-clearWhite bg-lightBlack">JavaScript</div>
      <div className="tag text-clearWhite bg-darkBlue">TypeScript</div>
      <div className="tag text-clearWhite bg-lightBlack">Bootstrap</div>
      <div className="tag text-lightBlack bg-lightGray">React</div>
      <div className="tag text-lightBlack bg-secondaryColor">Vite</div>
      <div className="tag text-clearWhite bg-darkBlue">Git</div>
      <div className="tag text-lightBlack bg-lightGray">Figma</div>
      <div className="tag text-clearWhite bg-mainColor">Jest</div>
      <div className="tag text-clearWhite bg-lightBlack">Bilingual</div>
      <div className="tag text-clearWhite bg-mainColor">Vitest</div>
    </div>
  )
}

export default Tags
