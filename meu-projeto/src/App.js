import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <h1>Testando css</h1>
      <SayMyName nome="Pedro" />
      <SayMyName nome={nome} />

      <Pessoa
        nome="Rodrigo"
        idade="20"
        profissao="programador"
        foto="https://via.placeholder.com/150" />
      <Frase/>
      <List/>
    </div>
  );
}

export default App;
