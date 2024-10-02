// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomButton from './button';

const Navbar = () => {
  const [language, setLanguage] = React.useState('English');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar  sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '10px 20px' ,
      
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', marginLeft:"110px",marginRight:"110px",flexDirection:isMobile?'column':'row' }}>
        
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
            style={{
              width: isMobile ? '120px' : '150px', 
              height: isMobile ? '40px' : '50px',
            }}
          />
        </IconButton>

        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            
          }}
        >
          {/* Language Selector */}
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, backgroundColor: '#333', borderRadius: 1 ,width: isMobile ? '100%' : 'auto'}}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Language' }}
              sx={{
                color: '#fff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '& .MuiSvgIcon-root': {
                  color: '#fff',
                },
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Español</MenuItem>
              <MenuItem value="French">Français</MenuItem>
              <MenuItem value="German">Deutsch</MenuItem>
            </Select>
          </FormControl>

          {/* sign in button */}

          <CustomButton sx={{
            textTransform:'capitalize',
            width: isMobile ? '100%' : 'auto',
            '&:hover':{
              backgroundColor:"#f12210"
            }
          }} />
        </Box>

        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;