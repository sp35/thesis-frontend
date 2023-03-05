import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Layout from './components/layout';
import Contact from './pages/contact';
import Download from './pages/download';
import HomePage from './pages/homePage';
import Keyword from './pages/keywords';
import ResultTable from './pages/resultTable';
import Submit from './pages/submit';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/browse-keywords" element={<Keyword />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
