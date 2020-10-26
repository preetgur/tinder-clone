
import './App.css';
import SwipeButtons from './components/SwipeButtons';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
        <Header/>

        <TinderCards/>

        <SwipeButtons/>
    </div>
  );
}

export default App;
