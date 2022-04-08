import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    function gatherInfo() {
      const recoverStorage = localStorage.getItem('clips');

      if (!recoverStorage) {
        localStorage.setItem('clips', []);
        setStorage([]);
      }

      setStorage(JSON.parse(recoverStorage));
    }

    gatherInfo();
  }, []);

  const handleStorage = (name, content) => {
    const object = { name, content };
    setStorage([...storage, object])

    localStorage.setItem('clips', JSON.stringify(storage));
  }

  return (
    <div className="App">
      <Header handleStorage={handleStorage} />
      <Main />
    </div>
  );
}

export default App;
