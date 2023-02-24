import './App.css'
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';

function App() {

  return (

    <div>
      <header>Librería Online</header>
      <Navbar />
      <Button txtBtn="Click"/>
      <h1>Productos</h1>
      <Card />
    </div>

  );
  
}

export default App
