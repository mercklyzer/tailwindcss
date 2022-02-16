import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App text-gray-600 grid md:grid-cols-3">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
