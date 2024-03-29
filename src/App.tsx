import './App.css';
import BigRectangle from './components/BigRectangle';
import Footer from './components/Footer';
import MainText from './components/MainText';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Tags from './components/Tags';
import WhoIAm from './components/WhoIAm';
import ImgSlider from './components/ImgSlider';
import Designs from './components/Designs';

function App() {

  return (
    <div className='application'>
      <NavBar/>

      {/*//1? Upper section */}
      <section>
        <BigRectangle/>
        <MainText/>
        <Tags/>
        <div className='first-social down-animation'>
          <SocialMedia color='white' background={true}/>
        </div>
      </section>

      {/*//1? Image Slider section */}
      <section>
        {/* <ImgSlider/> */}
      </section>


      {/*//1? Who I am section */}
      <section>
        <WhoIAm/>
      </section>

      {/*//1? Projects section*/}
      <section>
        <Projects/>
      </section>

      {/*//1? Designs section*/}
      <section>
        <Designs/>
      </section>

      {/*//1? Footer*/}
      <Footer/>
      
    </div>
  )
}

export default App
