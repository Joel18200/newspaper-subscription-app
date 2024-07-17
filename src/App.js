import logo from './logo.svg';
import './App.css';
import Addsub from './components/Addsub';
import Viewsub from './components/Viewsub';
import Searchsub from './components/Searchsub';
import Deletesub from './components/Deletesub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Addsub/>}/>
<Route path="/viewsub" element={<Viewsub/>}/>
<Route path="/searchsub" element={<Searchsub/>}/>
<Route path="/deletesub" element={<Deletesub/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
