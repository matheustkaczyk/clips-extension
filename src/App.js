import './App.css';
import { Header } from './components/Header';

function App() {
  const handleStorage = (name, content) => {
    const object = { name, content };

    const date = new Date();
    localStorage.setItem(`clips-${date.getTime()}`, JSON.stringify(object));
  }

  return (
    <div className="App">
      <Header handleStorage={handleStorage} />
    </div>
  );
}

export default App;
