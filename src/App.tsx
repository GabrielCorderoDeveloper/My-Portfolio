import './App.css'
import './components/componentsStyle.css'
import BigRectangle from './components/BigRectangle'
import Footer from './components/Footer'
import MainText from './components/MainText'
import NavBar from './components/NavBar'
import SocialMedia from './components/SocialMedia'
import Tags from './components/Tags'
import WhoIAm from './components/WhoIAm'

function App() {

  return (
    <div>
      <NavBar/>

      {/*//1? Upper section */}
      <section>
        <BigRectangle/>
        <MainText/>
        <Tags/>
        <div className='first-social'>
          <SocialMedia color='white' background={true}/>
        </div>
      </section>

      {/*//1? Who I am section */}
      <section>
        <WhoIAm/>
      </section>

      {/*//1? Projects section*/}
      <section></section>

      {/*//1? Footer*/}
      <Footer/>
      
    </div>
  )
}

export default App
