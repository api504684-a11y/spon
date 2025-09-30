import React, { useState, useCallback, useEffect } from 'react';
import type { Quote } from './types';
import { generateQuote } from './services/geminiService';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newQuote = await generateQuote('inspiration');
      setQuote(newQuote);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setQuote(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGenerateQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex flex-col items-center justify-center p-4 selection:bg-blue-500/30">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl text-center">
        <div className="w-full min-h-[250px] flex items-center justify-center p-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : quote ? (
            <QuoteCard quote={quote.quote} author={quote.author} />
          ) : null}
        </div>
        
        <button
          onClick={handleGenerateQuote}
          disabled={isLoading}
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {isLoading ? 'Generating...' : 'Get New Quote'}
        </button>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Powered by Google Gemini</p>
      </footer>
    </div>
  );
};

export default App;
