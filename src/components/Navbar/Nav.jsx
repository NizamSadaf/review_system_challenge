import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const Nav = () => {
 
  return (
    
    <AppBar style={{ "background-image": "linear-gradient(to right, #c45e10, #f5a364)" }} position="static">
    <Toolbar>
      
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontWeight: 200,
            fontFamily:'roboto',
            color:'white',
            letterSpacing: '.2rem',
            textDecoration: 'none',
          }}
        >
          Prototype
        </Typography>
        
    </Toolbar>
  </AppBar>
  );
}


export default Nav