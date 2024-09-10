import React from 'react';
import ResultDisplay from '../components/ResultDisplay';

const ResultsPage: React.FC = () => {
  // In a real application, you'd probably fetch results from a state management solution or context
  const dummyResult = "This is a placeholder for actual results.";

  return (
    <div>
      <h1>Results</h1>
      <ResultDisplay result={dummyResult} />
    </div>
  );
};

export default ResultsPage;