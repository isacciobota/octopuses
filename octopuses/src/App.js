import './App.css'
//components
import NavigationBar from './components/NavigationBar.js'
import SectorAbout from './components/SectorAbout'
import SectorOpenSea from './components/SectorOpenSea'
import SectorCollection from './components/SectorCollection'
import SectorTeam from './components/SectorTeam'
import Footer from './components/Footer'
//resources
import background from './resources/Background.jpeg'

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <img src={background} width="100%" alt="ocean"></img>
        <a  id="about"><SectorAbout/></a>
        <a  id="opensea"><SectorOpenSea id="opensea"/></a>
        <a  id="collection"><SectorCollection id="collection"/></a>
        <a  id="team"><SectorTeam id="team"/></a>
        <Footer/>
    </div>
  );
}

export default App;
