import React from 'react';

interface ResultDisplayProps {
  result: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => (
  <div>
    <h2>Results</h2>
    {result ? (
      <pre>{result}</pre>
    ) : (
      <p>No results to display. Try analyzing a URL, performing a web search, or generating a PowerPoint presentation.</p>
    )}
  </div>
);

export default ResultDisplay;