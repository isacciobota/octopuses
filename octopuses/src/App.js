import './App.css';
import NavigationBar from './components/NavigationBar.js'
import background from './resources/Background.jpeg'

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <img src={background} width="100%"></img>
    </div>
  );
}

export default App;
