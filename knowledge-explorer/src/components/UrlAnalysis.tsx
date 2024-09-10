import React, { useState } from 'react';
import { analyzeUrl } from '../services/api';
import { UrlAnalysisResult } from '../types';

const UrlAnalysis: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<UrlAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await analyzeUrl(url);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>URL Analysis</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to analyze"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && (
        <div>
          <h3>Analysis Result:</h3>
          <p>Title: {result.title}</p>
          <p>Description: {result.description}</p>
          <p>Word Count: {result.wordCount}</p>
          <p>Status Code: {result.statusCode}</p>
        </div>
      )}
    </div>
  );
};

export default UrlAnalysis;