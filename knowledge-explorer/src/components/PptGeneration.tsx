import React, { useState } from 'react';
import { generatePpt } from '../services/api';
import { PptGenerationResult } from '../types';

const PptGeneration: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<PptGenerationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await generatePpt(topic);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>PowerPoint Generation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic for PowerPoint"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && (
        <div>
          <h3>Generation Result:</h3>
          <p>{result.message}</p>
          <p>File Name: {result.fileName}</p>
        </div>
      )}
    </div>
  );
};

export default PptGeneration;