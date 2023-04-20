import './BigRectangle.css';

function BigRectangle() {
  let links = {
    img1: '/assets/gray_reactangle.png',
    img2: 'src/assets/gabriel_image.png',
  }

  return (
    <div className="big-rectangle">
      <img src={links.img1} alt="Big rotated rectangle" />
      <img src={links.img2} alt="Image of Gabriel Cordero" />
    </div>
  )
}

export default BigRectangle
