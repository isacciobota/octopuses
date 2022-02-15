import './App.css'
//components
import NavigationBar from './components/NavigationBar.js'
import SectorAbout from './components/SectorAbout'
import SectorOpenSea from './components/SectorOpenSea'
import SectorCollection from './components/SectorCollection'
import SectorTeam from './components/SectorTeam'
import SectorContact from './components/SectorContact'
//extra
import background from './resources/Background.jpeg'

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <img src={background} width="100%" alt="ocean"></img>
        <SectorAbout/>
        <SectorOpenSea/>
        <SectorCollection/>
        <SectorTeam/>
        <SectorContact/>     
    </div>
  );
}

export default App;
