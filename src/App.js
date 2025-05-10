import './App.css';
import Editor from './page/Editor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:roomId" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
