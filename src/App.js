import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
        <Banner/>
        <Form/>
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
