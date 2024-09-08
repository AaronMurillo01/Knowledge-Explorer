import React, { useState } from 'react';
import { analyzeUrl } from '../services/api';

const UrlAnalysis: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await analyzeUrl(url);
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setError('Failed to analyze URL');
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
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default UrlAnalysis;