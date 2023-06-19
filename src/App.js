
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListComponent from './components/ListComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ListComponent />} />
        <Route path="/result/:selectedCityName/:selectedStateName" element={<ResultComponent />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
