import './App.css'
import BigRectangle from './components/BigRectangle'
import MainText from './components/MainText'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar/>

      {/* Upper section */}
      <section>
        <BigRectangle/>
        <MainText/>
      </section>

    </div>
  )
}

export default App
