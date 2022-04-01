import './App.css'
//components
import Home from './components/Home.js'
import Traits from './components/Traits.js'
import Skin from './components/Skin.js'
import Accessories from './components/Accessories.js'
import Clothes from './components/Clothes.js'
import Eyes from './components/Eyes.js'
import Mouth from './components/Mouth.js'
import Tentacles from './components/Tentacles.js'
import Brows from './components/Brows.js'
import Background from './components/Background.js'
//routes
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/traits" element={<Traits />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/eyes" element={<Eyes />} />
            <Route path="/mouth" element={<Mouth />} />
            <Route path="/tentacles" element={<Tentacles />} />
            <Route path="/brows" element={<Brows />} />
            <Route path="/background" element={<Background />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));