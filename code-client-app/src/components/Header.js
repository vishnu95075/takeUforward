import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [page, setPage] = React.useState(true);
  const navigate = useNavigate();

  const handlePage1 = (e) => {
    e.preventDefault();
    setPage(true);
    navigate('/')
  }
  const handlePage2 = (e) => {
    e.preventDefault();
    setPage(false);
    navigate('/dashboard');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Stack textAlign={'center'} spacing={4} direction="row">
        <Button onClick={handlePage1} variant={page ? "contained" : "outlined"}>
          Page 1
        </Button>
        <Button onClick={handlePage2} variant={page ? "outlined" : "contained"}>
          Page 2
        </Button>
      </Stack>
    </div>
  )
}

export default Header