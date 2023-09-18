import './App.css'
import MyNavbar from './Components/MyNavbar'
import MyFooter from './Components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe'
import Home from './Pages/Home'
import BackgroundAnimate from './Components/BackgroundAnimate';

function App() {

  return (
    <div className='myContainer'>
      <Router>
        <MyNavbar />
        <BackgroundAnimate />
        <Routes>
						<Route path="/UrlShortenerApp/" element={<Home />} /> 
						<Route path="/UrlShortenerApp/about" element={<AboutMe />} />
				</Routes>
        <MyFooter />
      </Router>
    </div>
  )
}
export default App
