import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import service1 from "../assets/Service.png";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  useTheme,
  Paper,
  Fade
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NeuralBackground from '../../../src/components/neurons/neurons';

// Enhanced keyframe animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(2deg); }
  50% { transform: translateY(0px) rotate(0deg); }
  75% { transform: translateY(10px) rotate(-1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 300% 0; }
`;

const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const colorCycle = keyframes`
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(15deg); }
  100% { filter: hue-rotate(0deg); }
`;

// Enhanced styled components
const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6A11CB, #8A43FF, #2575FC)',
  backgroundSize: '300% 300%',
  animation: `${gradientShift} 8s ease infinite`,
  color: 'white',
  textTransform: 'none',
  padding: '16px 36px',
  borderRadius: '50px',
  fontWeight: 700,
  boxShadow: '0 10px 25px rgba(106, 17, 203, 0.4)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '18px',
  '&:hover': {
    boxShadow: '0 15px 35px rgba(106, 17, 203, 0.6)',
    transform: 'translateY(-5px) scale(1.05)',
    background: 'linear-gradient(45deg, #6A11CB, #8A43FF, #2575FC)',
    backgroundSize: '300% 300%',
    backgroundPosition: '100% 50%',
  },
}));

const AnimatedContainer = styled(Container)({
  position: 'relative',
  overflow: 'hidden',
});

const AnimatedImage = styled(Box)({
  animation: `${float} 12s ease-in-out infinite`,
  position: 'relative',
});

const ContentSection = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 1.5s ease-out forwards`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

const GlowCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '40px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 25px 50px rgba(106, 17, 203, 0.2), 0 10px 20px rgba(37, 117, 252, 0.15)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  animation: `${breathe} 10s ease-in-out infinite`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 30px 60px rgba(106, 17, 203, 0.3), 0 15px 30px rgba(37, 117, 252, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-100%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(138, 67, 255, 0.15) 0%, rgba(255,255,255,0) 70%)',
    animation: `${pulse} 8s ease-in-out infinite`,
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '-100%',
    width: '300%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
    animation: `${shimmer} 10s infinite`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  }
}));

// New gradient text component
const GradientText = styled(Typography)({
  background: 'linear-gradient(to right, #6A11CB, #8A43FF, #2575FC)',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
  animation: `${colorCycle} 8s infinite ease`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export default function ServiceView() {
  const theme = useTheme();
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbar />
      <AnimatedContainer maxWidth="xl" sx={{ position: 'relative', pb: { xs: 16, md: 24 }, pt: { xs: 16, md: 20 } }}>
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.9,
          zIndex: 0,
          animation: `${colorCycle} 20s infinite ease`
        }}>
          <NeuralBackground />
        </Box>
        
        <Grid 
          container 
          spacing={{ xs: 8, md: 10 }} 
          alignItems="center" 
          justifyContent="space-between"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Fade in={animate} timeout={1200}>
              <Box>
                <GlowCard elevation={0}>
                  <ContentSection>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '26px',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        color: '#6A11CB',
                        textTransform: 'uppercase',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-10px',
                          left: '0',
                          height: '5px',
                          width: '80px',
                          background: 'linear-gradient(90deg, #6A11CB, #2575FC)',
                          borderRadius: '20px'
                        }
                      }}
                    >
                      Our Services
                    </Typography>
                    
                    <Typography
                      variant="h2"
                      sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: { xs: '40px', md: '54px' },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        maxWidth: '540px',
                        color: '#0A0F25',
                        marginTop: 2
                      }}
                    >
                      We are driven by
                      <Box component="span" sx={{ 
                        position: 'relative',
                        padding: '0 10px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: '8px',
                          left: '0',
                          height: '18px',
                          width: '100%',
                          background: 'rgba(138, 67, 255, 0.2)',
                          zIndex: -1,
                          borderRadius: '6px',
                          transform: 'skewX(-10deg)'
                        }
                      }}>
                        <GradientText component="span"> innovation</GradientText>
                      </Box> and values
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{ 
                        maxWidth: '520px',
                        mb: 6,
                        fontFamily: 'inherit',
                        color: '#4A4D66',
                        lineHeight: 2,
                        fontSize: '19px',
                        letterSpacing: '0.2px'
                      }}
                    >
                      Our values drive us and set us apart from others in the industry. We truly care about our customers, employees, and community. Providing you with top-notch products and services that meet and exceed your expectations is our main priority. Transparency, honesty, and ethics are the backbone of everything we do.
                    </Typography>
                    
                    <Box sx={{ position: 'relative' }}>
                      <StyledButton 
                        variant="contained" 
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 24, ml: 1 }} />}
                        size="large"
                      >
                        Explore Our Services
                      </StyledButton>
                      <Box sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '110%',
                        height: '150%',
                        borderRadius: '50px',
                        background: 'rgba(138, 67, 255, 0.15)',
                        filter: 'blur(20px)',
                        animation: `${pulse} 3s infinite ease-in-out`
                      }} />
                    </Box>
                  </ContentSection>
                </GlowCard>
              </Box>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Fade in={animate} timeout={1800}>
              <Box>
                <AnimatedImage
                  sx={{
                    maxHeight: '800px',
                    maxWidth: '700px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-20px',
                      left: '10%',
                      width: '80%',
                      height: '40px',
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 80%)',
                      borderRadius: '50%',
                      filter: 'blur(12px)',
                      animation: `${pulse} 12s ease-in-out infinite`,
                      opacity: 0.7
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={service1}
                    alt="About"
                    sx={{
                      width: { xs: '95%', md: '100%' },
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3))',
                      transition: 'all 0.5s ease',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)',
                      }
                    }}
                  />
                </AnimatedImage>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </AnimatedContainer>
    </>
  );
}