import React, { useState } from 'react';
import { performWebSearch } from '../services/api';

const WebSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await performWebSearch(query);
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setError('Failed to perform web search');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Web Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default WebSearch;