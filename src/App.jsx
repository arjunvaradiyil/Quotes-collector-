import React, { useState } from 'react';

const App = () => {
  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleQuote = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    if (quote.trim() === "" || author.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }

    setQuotes(prevQuotes => [...prevQuotes, { quote, author }]);
    setquote("");
    setauthor("");
  };

  return (
    <div className="container">
      <h1>Quote Collector</h1>
      <form onSubmit={handleQuote}>
        <input
          type="text"
          placeholder="Enter the quote"
          value={quote}
          onChange={(e) => setquote(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Enter the author name"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
          required
        /><br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {quotes.map((q, index) => (
          <li key={index}>
            <p>"{q.quote}" — <em>{q.author}</em></p>
          </li>
        ))}
      </ul>

      {/* Styles */}
      <style>{`
        .container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        input {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        li {
          background: #f9f9f9;
          padding: 10px;
          border-left: 4px solid #4CAF50;
          margin-bottom: 10px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default App;
