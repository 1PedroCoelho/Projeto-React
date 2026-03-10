import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'pedrobosta'

  function soma(a, b) {
    return a + b
  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <h1>Olá React</h1>
      <p>Olá {name}</p>
      <p>Soma {soma(2, 3)}</p>
      <img src={url} alt='minha imagem' />
      <HelloWorld/>

    </div>
  );
}

export default App;
