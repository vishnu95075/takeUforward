import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/code-snippets');
      setCodeSnippets(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <h1>Code Snippets</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Source Code</th>
            <th>Submition Time</th>
          </tr>
        </thead>
        <tbody>
          {codeSnippets.map(snippet => (
            <tr key={snippet.id}>
              <td>{snippet.username}</td>
              <td>{snippet.code_language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.source_code_preview}</td>
              <td>{snippet.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard