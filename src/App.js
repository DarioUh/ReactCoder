import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={'Bienvenidos a mi sitio'}/>      
    </div>
  );
}

export default App;
