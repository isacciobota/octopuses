import SectorAbout from './SectorAbout.js'
import SectorOpenSea from './SectorOpenSea.js'
import SectorCollection from './SectorCollection.js'
import SectorTeam from './SectorTeam.js'
import Footer from './Footer.js'
import Header from './Header.js'
import NavigationBar from './NavigationBarHome.js'

function Home() {
  return (
    <div className="App">
        <NavigationBar />
        <Header/>
        <a id="about"><SectorAbout/></a>
        <a id="opensea"><SectorOpenSea id="opensea"/></a>
        <a id="collection"><SectorCollection id="collection"/></a>
        <a id="team"><SectorTeam id="team"/></a>
        <Footer/>
    </div>
  );
}

export default Home;