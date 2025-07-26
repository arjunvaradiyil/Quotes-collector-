import React, { useState } from 'react';

const App = () => {
  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [errors, setErrors] = useState({});

  const handleQuote = (e) => {
    e.preventDefault();
    console.log("Form submitted!", { quote, author });
    
    // Clear previous errors
    setErrors({});
    
    // Validate fields
    const newErrors = {};
    if (quote.trim() === "") {
      newErrors.quote = "Quote is required";
    }
    if (author.trim() === "") {
      newErrors.author = "Author is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    addQuote();
  };

  const addQuote = () => {
    console.log("Adding quote:", { quote, author });
    setQuotes(prev => [...prev, { quote, author }]);
    setquote("");
    setauthor("");
    setErrors({});
  };

  const handleInputChange = (field, value) => {
    console.log(`Input changed: ${field} = ${value}`);
    if (field === 'quote') {
      setquote(value);
    } else if (field === 'author') {
      setauthor(value);
    }
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              QuoteVault
            </h1>
            <p className="text-gray-400 text-lg">Store your inspiration</p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 mb-8">
            <form onSubmit={handleQuote} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Your Quote
                </label>
                <input
                  type="text"
                  placeholder="Enter your favorite quote..."
                  value={quote}
                  onChange={(e) => handleInputChange('quote', e.target.value)}
                  className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 ${
                    errors.quote ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.quote && (
                  <p className="text-red-400 text-sm mt-2">{errors.quote}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Author
                </label>
                <input
                  type="text"
                  placeholder="Who said it?"
                  value={author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 ${
                    errors.author ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.author && (
                  <p className="text-red-400 text-sm mt-2">{errors.author}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Save Quote
              </button>
            </form>
          </div>

          {/* Quotes Grid */}
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {quotes.length === 0 ? (
              <div className="text-center py-16 bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-800">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-400 text-lg">Start collecting your favorite quotes</p>
              </div>
            ) : (
              quotes.map((q, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <blockquote className="text-gray-100 text-lg leading-relaxed mb-4 italic">
                    "{q.quote}"
                  </blockquote>
                  <cite className="text-cyan-400 font-semibold text-right block">
                    — {q.author}
                  </cite>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default App;
