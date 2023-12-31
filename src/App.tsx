import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import TopRepos from './components/TopRepos';
import Home from './components/Home';
import BatchRepos from './components/BatchRepos';

function App() {

  return (

    <div className="App">
     <Router>
   <Routes>
   <Route path="/top-repos/:count" Component={TopRepos} />
   <Route path="/batch/:count" Component={BatchRepos} />
   <Route path="/" Component={Home} />
   </Routes>
   </Router>
   </div>
  );
}

export default App;
