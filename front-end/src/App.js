import "./App.css";
import {useState} from 'react';

let initialState = [
  {
    id: "1",
    descricao: "Primeira atividade",
  },
  {
    id: "2",
    descricao: "Segunda atividade",
  }
];

function App() {
  const [atividades, setAtividades] = useState(initialState)
  
  function addAtividade(e){
    e.preventDefault();

    const atividade ={
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    
    setAtividades([...atividades, {... atividade}]);
  }

  return (
    <>
    <form>
    <input id="id" type="text" placeholder="id"></input>
    <input id="descricao" type="text" placeholder="descricao"></input>
    <button onClick={addAtividade}>+ Atividade teste</button>
    </form>
    <div className="mt-3">
      <ul className="list-group">
        {atividades.map((ativ) => (
          <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao} </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
