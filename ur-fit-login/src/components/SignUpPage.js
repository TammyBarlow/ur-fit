import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import sideImage from '../assets/signupImage.jpeg';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'participant' // Default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Top Navigation Bar - Same as login */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            UR Fit
          </Typography>
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography>Home</Typography>
            </Link>
            <Link to="/challenges" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography>Challenges</Typography>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
              <Typography fontWeight="bold">Sign In</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content - Two Equal Columns */}
      <Box sx={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* Left Side - Background Image */}
        <Box sx={{ 
          flex: 1,
          display: { xs: 'none', md: 'block' },
          backgroundImage: `url(${sideImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />

        {/* Right Side - Sign Up Form */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.9)',
          overflowY: 'auto',
          padding: '20px'
        }}>
          <Box sx={{ 
            width: '100%',
            maxWidth: '400px',
            padding: '40px'
          }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Create Account
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                name="username"
                value={formData.username}
                onChange={handleChange}
                sx={{ mb: 3 }}
                required
              />
              
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 3 }}
                required
              />
              
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: 3 }}
                required
              />

              {/* User Type Selection */}
              <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
                <FormLabel component="legend">I am a:</FormLabel>
                <RadioGroup
                  row
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <FormControlLabel 
                    value="participant" 
                    control={<Radio />} 
                    label="Participant" 
                  />
                  <FormControlLabel 
                    value="coordinator" 
                    control={<Radio />} 
                    label="Coordinator" 
                  />
                </RadioGroup>
              </FormControl>
              
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  py: 1.5,
                  mb: 2,
                  backgroundColor: 'black',
                  '&:hover': { backgroundColor: '#333' }
                }}
              >
                Sign Up
              </Button>
            </form>
            
            <Typography align="center">
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'black', fontWeight: 'bold' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;