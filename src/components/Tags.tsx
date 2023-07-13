import './Tags.css';

const Tags = () => {
  return (
    <div className="d-flex flex-wrap col-lg-4 col-md-8 tag-container left-animation ">
      <div className="tag text-clearWhite bg-mainColor">HTML</div>
      <div className="tag text-lightBlack bg-secondaryColor">CSS</div>
      <div className="tag text-clearWhite bg-mainColor">JavaScript</div>
      <div className="tag text-clearWhite bg-lightBlack">TypeScript</div>
      <div className="tag text-clearWhite bg-darkBlue">Bootstrap</div>
      <div className="tag text-clearWhite bg-lightBlack">React</div>
      <div className="tag text-clearWhite bg-mainColor">NodeJS</div>
      <div className="tag text-lightBlack bg-lightGray">Vite</div>
      <div className="tag text-lightBlack bg-secondaryColor">Git</div>
      <div className="tag text-clearWhite bg-darkBlue">Figma</div>
      <div className="tag text-lightBlack bg-lightGray">Jest</div>
      <div className="tag text-clearWhite bg-mainColor">Vitest</div>
      <div className="tag text-clearWhite bg-lightBlack">UX/UI</div>
      <div className="tag text-clearWhite bg-mainColor">SASS</div>
      <div className="tag text-lightBlack bg-secondaryColor">Bilingual</div>
    </div>
  )
}

export default Tags
