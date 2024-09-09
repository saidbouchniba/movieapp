import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import Movies from './components/Data';
function App() {
  return (
    <div className="App">
<Header/>
<Movielist Movies={Movies} name="said"/>
    </div>
  );
}

export default App;
