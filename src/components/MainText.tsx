import './MainText.css';

const MainText = () => {
  return (
      <div className='main-container col-lg-3 col-md-5 col-9 left-animation'>
          <div className='d-flex flex-column justify-content-start white-transparent-bg'>
            <p className='title text-lightBlack'>My name <br/>is <b className='roboto'>Gabriel</b></p>
            <p className='paragraph text-darkGray'>I am an extremely dedicated person following his dream of become a Front End developer.</p>
          </div>
          <button className='bg-mainColor button text-clearWhite'>Hire me</button>
      </div>
  )
}

export default MainText
