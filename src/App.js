import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    function gatherInfo() {
      let recoverStorage = localStorage.getItem('clips');

      if (recoverStorage === null) {
        localStorage.setItem('clips', [])
        setStorage([]);
        return false;
      }

      recoverStorage = JSON.parse(recoverStorage);
      setStorage(recoverStorage);
    }

    gatherInfo();
  }, []);

  const handleStorage = (name, content) => {
    const object = { name, content };
    let newArr = [...storage, object];

    let arrayStringified = JSON.stringify(newArr)
    setStorage(newArr);

    localStorage.setItem('clips', arrayStringified);
  }

  return (
    <div className="App">
      <Header handleStorage={handleStorage} />
      <Main />
    </div>
  );
}

export default App;
