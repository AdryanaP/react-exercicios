import './App.css';
import Convidados from './components/Convidados';
import Tarefas from './components/Tarefas';

function App() {
  return (
    <div className="App">
      <div className="content">
        <p>Convidados:</p>
        <ul>
          <Convidados name="Nicolas"/>
          <Convidados name="Pedro"/>
          <Convidados name="Carolina"/>
        </ul>
        <p>Tarefas:</p>
        <ul>
          <Tarefas name="Nicolas" food="batata-frita" />
          <Tarefas name="Pedro" food="pizza" />
          <Tarefas name="Carolina" food="bedidas" />
        </ul>
      </div>
    </div>
  );
}

export default App;