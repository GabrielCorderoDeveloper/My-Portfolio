import './Tags.css';

const Tags = () => {
  return (
    <div className="d-flex flex-wrap col-lg-4 col-md-8 tag-container left-animation ">
      <div className="tag text-lightBlack bg-secondaryColor">HTML</div>
      <div className="tag text-clearWhite bg-mainColor">CSS</div>
      <div className="tag text-clearWhite bg-lightBlack">JavaScript</div>
      <div className="tag text-clearWhite bg-darkBlue">TypeScript</div>
      <div className="tag text-clearWhite bg-lightBlack">Bootstrap</div>
      <div className="tag text-lightBlack bg-lightGray">React</div>
      <div className="tag text-lightBlack bg-secondaryColor">Vite</div>
      <div className="tag text-clearWhite bg-darkBlue">Git</div>
      <div className="tag text-clearWhite bg-mainColor">Figma</div>
      <div className="tag text-lightBlack bg-lightGray">Bilingual</div>
    </div>
  )
}

export default Tags
