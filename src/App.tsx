import './App.css'
import BigRectangle from './components/BigRectangle'
import MainText from './components/MainText'
import NavBar from './components/NavBar'
import SocialMedia from './components/SocialMedia'
import Tags from './components/Tags'

function App() {

  return (
    <div>
      <NavBar/>

      {/* Upper section */}
      <section>
        <BigRectangle/>
        <MainText/>
        <Tags/>
        <div className='first-social'>
          <SocialMedia color={'white'} background={true}/>
        </div>
      </section>

    </div>
  )
}

export default App
