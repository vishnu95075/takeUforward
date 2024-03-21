import React, { useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Snackbar,
    Alert,
    MenuItem
} from '@mui/material';

export default function Home() {
    const [username, setUsername] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('');
    const [stdin, setStdin] = useState('');
    const [sourceCode, setSourceCode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/code-snippets', { username, codeLanguage, stdin, sourceCode });
            setSubmitted(true);
            setSourceCode('');
            setStdin('');
        } catch (error) {
            console.error('Error submitting code snippet:', error);
        }
    };
    const handleSnackbarClose = () => {
        setSubmitted(false);
    };
    return (
        <Container>
            <Typography variant="h5" align="center" gutterBottom>Problem Submition Code</Typography>
            <Snackbar
                open={submitted}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                <Alert onClose={handleSnackbarClose} severity="success" >
                    Code submitted successfully!
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            label="Username"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            select
                            label="Code Language"
                            fullWidth
                            value={codeLanguage}
                            onChange={(e) => setCodeLanguage(e.target.value)}
                        >
                            <MenuItem value="C++">C++</MenuItem>
                            <MenuItem value="Java">Java</MenuItem>
                            <MenuItem value="JavaScript">JavaScript</MenuItem>
                            <MenuItem value="Python">Python</MenuItem>
                        </TextField>
                    </Grid>
                    <div />
                    <Grid item xs={12} sm={8}>
                        <TextField
                            label="Write Code "
                            multiline
                            rows={8}
                            fullWidth
                            value={sourceCode}
                            onChange={(e) => setSourceCode(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            label="Standard Input (stdin)"
                            fullWidth
                            multiline
                            rows={4}
                            value={stdin}
                            onChange={(e) => setStdin(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    );
}
