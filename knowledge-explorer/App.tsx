import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import HomePage from "./src/pages/HomePage";
import ResultsPage from "./src/pages/ResultsPage";
import './styles.css';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;