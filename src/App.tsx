import './App.css'
import BigRectangle from './components/BigRectangle'
import MainText from './components/MainText'
import NavBar from './components/NavBar'
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
      </section>

    </div>
  )
}

export default App
