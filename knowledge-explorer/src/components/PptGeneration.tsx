import React, { useState } from 'react';
import { generatePpt } from '../services/api';

const PptGeneration: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const data = await generatePpt(topic);
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setError('Failed to generate PowerPoint');
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
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default PptGeneration;