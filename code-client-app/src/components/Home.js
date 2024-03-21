import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {
    const [page, setPage] = useState(true);
    const [username, setUsername] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('');
    const [stdin, setStdin] = useState('');
    const [sourceCode, setSourceCode] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [codeSnippets, setCodeSnippets] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/code-snippets', { username, codeLanguage, stdin, sourceCode });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting code snippet:', error);
        }
    };

    useEffect(() => {
        axios.get('/api/code-snippets')
            .then(res => {
                setCodeSnippets(res.data);
            })
            .catch(err => {
                console.error('Error fetching code snippets:', err);
            });
    }, []);

    const handlePage = (e) => {
        e.preventDefault();
        setPage(!page);
    }
    return (
        <div>
            <button onClick={handlePage}>{page ? "Page 1" : "Page 2"}</button>
            {
                page ? "Page 1" : "Page 2"
            }

            {page ? <div>
                <h1>Submit Code Snippet</h1>
                {submitted ? (
                    <p>Code snippet submitted successfully!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label>Preferred Code Language:</label>
                            <input type="text" value={codeLanguage} onChange={(e) => setCodeLanguage(e.target.value)} />
                        </div>
                        <div>
                            <label>Standard Input (stdin):</label>
                            <input type="text" value={stdin} onChange={(e) => setStdin(e.target.value)} />
                        </div>
                        <div>
                            <label>Source Code:</label>
                            <textarea value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div> :
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
            }

        </div>
    );
}