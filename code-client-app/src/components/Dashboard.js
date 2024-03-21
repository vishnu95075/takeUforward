import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Divider,
  Paper,
  Grid
} from '@mui/material';

const Dashboard = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://take-uforward.vercel.app/api/code-snippets');
      setCodeSnippets(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container align='center'>
      <Typography align='center'>Submited Codes</Typography>
      {
        codeSnippets.map(snippet => (
          <Container key={snippet.id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Typography> Username:  {snippet.username}</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography> Code Language: {snippet.code_language}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>Submitted Date:  {snippet.created_at}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={1} >
                  <Typography>  {snippet.source_code_preview}</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Divider color='blue' variant='bold' />
          </Container>
        ))}
    </Container>
  );
}

export default Dashboard;
