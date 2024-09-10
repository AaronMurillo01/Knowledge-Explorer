import React from 'react';
import UrlAnalysis from '../components/UrlAnalysis';
import WebSearch from '../components/WebSearch';
import PptGeneration from '../components/PptGeneration';

const HomePage: React.FC = () => (
  <div>
    <h1>Knowledge Explorer</h1>
    <UrlAnalysis />
    <WebSearch />
    <PptGeneration />
  </div>
);

export default HomePage;