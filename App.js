import React, { useState } from 'react';
import CreateQuestion from './CreateQuestion';
import CreateArticle from './CreateArticle';
import './App.css';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  return (
    <div>
      <h1>New Post</h1>
      <h1>What do you want or Share</h1>
      <label>
        Select Post Type:
        <select
          value={selectedPostType}
          onChange={(e) => setSelectedPostType(e.target.value)}
        >
          <option value="question">Question</option>
          <option value="article">Article</option>
        </select>
      </label>
      {selectedPostType === 'question' ? <CreateQuestion /> : <CreateArticle />}
    </div>
  );
}

export default App;
