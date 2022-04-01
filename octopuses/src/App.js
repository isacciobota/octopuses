import './App.css'
//components
import NavigationBar from './components/NavigationBar.js'
import Home from './components/Home.js'
import Traits from './components/Traits.js'
import Gallery from './components/Gallery.js'
//routes
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="/traits" element={<Traits />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));