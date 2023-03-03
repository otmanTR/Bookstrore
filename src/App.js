import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
}

export default App;
