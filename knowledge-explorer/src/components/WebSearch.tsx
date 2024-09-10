import React, { useState } from 'react';
import { performWebSearch } from '../services/api';
import { WebSearchResult } from '../types';

const WebSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<WebSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await performWebSearch(query);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
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
      {result && (
        <div>
          <h3>Search Result:</h3>
          <p>Abstract: {result.abstract}</p>
          <h4>Related Topics:</h4>
          <ul>
            {result.relatedTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WebSearch;