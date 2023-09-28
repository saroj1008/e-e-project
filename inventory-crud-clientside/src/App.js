import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="*" element={<div>no page found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
