import Banner from './components/Banner';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
        <Banner/>
        <TextInput label="Nome" placeholder="Digite seu nome"></TextInput>
        <TextInput label="Cargo" placeholder="Digite seu cargo"></TextInput>
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem"></TextInput>
        <h1>Olá, mundo</h1>
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> and save to reload .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
