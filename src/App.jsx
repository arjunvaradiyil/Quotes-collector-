import React, { useState } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleAddQuote = () => {
    if (quote.trim() && author.trim()) {
      setQuotes([...quotes, { text: quote, author }]);
      setQuote('');
      setAuthor('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {/* Centered Heading */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
          }}
        >
          Quotes Collector
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Collect your favorite quotes and share them with others!
        </p>
      </div>

      {/* Input Fields */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Enter your quote here"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <input
          type="text"
          placeholder="Enter the author's name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleAddQuote}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit Quote
        </button>
      </div>

      {/* Quotes List */}
      <ul style={{ paddingLeft: '20px' }}>
        {quotes.map((q, index) => (
          <li key={index}>“{q.text}” — {q.author}</li>
            
          
        ))}
      </ul>
    </div>
  );
};

export default App;
