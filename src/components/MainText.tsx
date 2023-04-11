import React from 'react'

const MainText = () => {
  return (
    <div className='main-container'>
        <div className='d-flex flex-column justify-content-start '>
          <p className='title text-lightBlack'>My name <br/>is <b className='roboto'>Gabriel</b></p>
          <p className='paragraph text-darkGray col-lg-3 col-md-5  col-9'>I am an extremely dedicated person following his dream of become a Front End developer.</p>
        </div>

        <button className='bg-mainColor button text-clearWhite'>Hire me</button>
    </div>
  )
}

export default MainText
