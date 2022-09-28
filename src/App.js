import './App.css';

import Home from './Componente/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Questions from './Componente/Questions/Questions';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Home></Home>
      <Questions></Questions>
    </div>
  );
}

export default App;
