import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, Button, TextField, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../Navbar';
import NeuralBackground from '../../../src/components/neurons/neurons';

// Styled components
const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(12),
  },
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '8px',
  fontWeight: 600,
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-2px)',
  },
}));

const GlowText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textShadow: '0 0 10px rgba(94, 114, 228, 0.3)',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const AIContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <Navbar/>
      <NeuralBackground />
      
      <ContentContainer maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="overline" 
            fontWeight={600} 
            color="primary" 
            sx={{ letterSpacing: 2, mb: 1, display: 'block' }}
          >
            NEXT GENERATION
          </Typography>
          
          <GlowText variant="h2" component="h1" sx={{ mb: 2 }}>
            AI-Powered Solutions
          </GlowText>
          
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', fontWeight: 300 }}
          >
            Harnessing neural networks to transform your business with intelligent automation
          </Typography>
        </Box>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <GlassCard elevation={0}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 4 }}>
                Get in <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <StyledTextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <GradientButton 
                    type="submit"
                    variant="contained" 
                    disabled={loading}
                    startIcon={loading && <CircularProgress size={20} color="inherit" />}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </GradientButton>
                </Box>
              </form>
            </GlassCard>
          </Grid>
        </Grid>
      </ContentContainer>
    </>
  );
};

export default AIContactForm;