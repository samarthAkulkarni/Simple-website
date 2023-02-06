import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

    <BrowserRouter >
      <Routes>


        <Route path='/' element={<><Navbar /> <Header /> <Skills /> <Footer /> </>}></Route>
        <Route path='/about' element={<> <Navbar /> <About /> <Footer /> </>}></Route>
        <Route path='*' element={<><Navbar /> <Error /></>}></Route>

      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
