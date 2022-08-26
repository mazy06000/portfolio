import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Certifications from './components/Certifications/Certifications'
import Iframe from './components/Iframe/Iframe'
import './App.css'


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <Routes>
              <Route exact path='/' element={
              <div id='top' className={`${themeName} app`}>
                <Header />

                <main>
                  <About />
                  <Projects />
                  <Skills />
                  <Certifications />
                  <Contact />
                </main>

                <ScrollToTop />
                <Footer />
              </div>} />
              <Route path='/autonomous-car' element={<Iframe />} />
      </Routes>
    
    </Router>
  )
}

export default App
