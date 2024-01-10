import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import * as randomId from 'random-id';

function App() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    function gatherInfo() {
      let recoverStorage = localStorage.getItem('clips');

      if (recoverStorage === null) {
        localStorage.setItem('clips', "[]")
        setStorage([]);
        return false;
      }

      recoverStorage = JSON.parse(recoverStorage);
      setStorage(recoverStorage);
    }

    gatherInfo();
  }, []);

  const handleStorage = (name, content) => {
    const object = { name, content, id: randomId() };
    let newArr = [...storage, object];

    let arrayStringified = JSON.stringify(newArr)
    setStorage(newArr);

    localStorage.setItem('clips', arrayStringified);
  }

  const handleDelete = (id) => {
    let recoverStorage = localStorage.getItem('clips');
    recoverStorage = JSON.parse(recoverStorage);

    recoverStorage = recoverStorage.filter((item) => item.id !== id);

    setStorage(recoverStorage);

    let storageString = JSON.stringify(recoverStorage);
    localStorage.setItem('clips', storageString);
  }

  const handleCopy = (copyFunc, content, setOpened) => {
    setOpened(true);
    copyFunc(content);

    setTimeout(() => {
      setOpened(false);
    }, 3000)
  }

  return (
    <div className="App">
      <Header />
      <Main storage={ storage } handleDelete={ handleDelete } handleStorage={ handleStorage } handleCopy={ handleCopy } />
    </div>
  );
}

export default App;
