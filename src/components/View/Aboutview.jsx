import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../Navbar";
import Footer from "../ui/Footer";
import Process from "../Process";
import { Box, Typography, Container, Grid, useTheme, alpha, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import NeuronBackground from '../../../src/components/neurons/neurons';

// Styled components with enhanced animations
const StyledCard = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(145deg, ${alpha('#1a2942', 0.9)}, ${alpha('#0d1728', 0.8)})` 
    : `linear-gradient(145deg, ${alpha('#ffffff', 0.9)}, ${alpha('#f5f7fa', 0.8)})`,
  borderRadius: '16px',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  boxShadow: `0 8px 20px ${alpha(theme.palette.text.primary, 0.07)}`,
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  position: 'relative',
  padding: theme.spacing(5),
  zIndex: 2,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: `0 20px 30px ${alpha(theme.palette.text.primary, 0.1)}, 0 0 15px ${alpha(theme.palette.primary.main, 0.2)}`,
    '&::before': {
      opacity: 0.7,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, transparent, ${theme.palette.secondary.main})`,
    zIndex: -1,
    borderRadius: '18px',
    animation: 'rotate 3s linear infinite',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
}));

const AnimatedBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 0,
});

const StoryPoint = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
  position: 'relative',
  paddingLeft: theme.spacing(5),
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.3)}`,
    transition: 'all 0.3s ease',
  },
  '&:hover:before': {
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.5)}`,
  },
}));

const AboutHeading = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(2),
}));

const FloatingShape = styled(Box)(({ shape, theme }) => ({
  position: 'absolute',
  opacity: 0.07,
  background: theme.palette.primary.main,
  zIndex: 0,
  borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '15%' : '0',
  animation: '$float 15s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
    '25%': { transform: 'translate(10px, -10px) rotate(5deg)' },
    '50%': { transform: 'translate(-5px, 15px) rotate(-3deg)' },
    '75%': { transform: 'translate(-15px, -5px) rotate(8deg)' },
  },
}));

const ParallaxBox = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
});

export default function AboutView() {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const storyRef = useRef(null);
  const processRef = useRef(null);
  const theme = useTheme();
  
  useEffect(() => {
    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if story section is in view
      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setInView(true);
        }
      }
      
      // Check if process section is in view (applying the same animation logic)
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setInView(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Card animation variants (consistent for all cards)
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <>
      <Navbar />
      <AnimatedBackground>
        <NeuronBackground density={0.8} speed={0.6} />
      </AnimatedBackground>
      
      <ParallaxBox sx={{ 
        position: 'relative', 
        overflow: 'visible',
        pt: { xs: 12, md: 16 }, 
        pb: { xs: 8, md: 12 },
        minHeight: '100vh',
        backgroundColor: theme.palette.mode === 'dark' ? '#0a1929' : '#f8fafc',
      }}>
        {/* Decorative floating shapes */}
        <FloatingShape 
          shape="circle" 
          sx={{ 
            width: '300px', 
            height: '300px', 
            top: '5%', 
            right: '-150px',
            animationDelay: '0s',
            animationDuration: '20s'
          }} 
        />
        <FloatingShape 
          shape="square" 
          sx={{ 
            width: '200px', 
            height: '200px', 
            bottom: '10%', 
            left: '-100px',
            animationDelay: '-5s',
            animationDuration: '15s'
          }} 
        />
        <FloatingShape 
          shape="circle" 
          sx={{ 
            width: '150px', 
            height: '150px', 
            top: '60%', 
            right: '5%',
            animationDelay: '-10s',
            animationDuration: '18s'
          }} 
        />
        
        <Container maxWidth="xl" sx={{ 
          position: 'relative',
          zIndex: 1,
          transform: `translateY(${scrollY * 0.1}px)`
        }}>
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Grow in={true} timeout={1000}>
                <div>
                  <StyledCard ref={storyRef}>
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography 
                          component={motion.div}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          variant="overline" 
                          color="primary" 
                          sx={{ 
                            fontSize: '1.1rem', 
                            letterSpacing: '0.15em',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            mb: 1,
                            display: 'block'
                          }}
                        >
                          About Us
                        </Typography>
                        
                        <AboutHeading 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <Typography 
                            variant="h2" 
                            fontWeight={700} 
                            sx={{ 
                              mb: 2,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              display: 'inline-block',
                              fontSize: { xs: '2rem', md: '3rem' },
                              textShadow: `0 2px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                            }}
                          >
                            Our Story
                          </Typography>
                        </AboutHeading>
                        
                        <Box
                          sx={{
                            width: '150px',
                            height: '6px',
                            mx: 'auto',
                            mt: 1,
                            mb: 3,
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            borderRadius: '8px',
                            boxShadow: `0 0 15px ${alpha(theme.palette.primary.main, 0.6)}`,
                            animation: 'expandWidth 2s infinite alternate ease-in-out',
                            '@keyframes expandWidth': {
                              '0%': { width: '80px' },
                              '100%': { width: '150px' }
                            }
                          }}
                        />
                      </Box>
                      
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        sx={{ position: 'relative', zIndex: 1 }}
                      >
                        <StoryPoint variants={itemVariants}>
                          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: alpha(theme.palette.text.primary, 0.9) }}>
                            With a focus on the travel industry, our skilled team has been offering businesses efficient solutions since 2012.
                          </Typography>
                        </StoryPoint>
                        
                        <StoryPoint variants={itemVariants}>
                          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: alpha(theme.palette.text.primary, 0.9) }}>
                            We have developed cutting-edge blockchain and artificial intelligence solutions especially for the travel industry because we understand the unique challenges that travel businesses face.
                          </Typography>
                        </StoryPoint>
                        
                        <StoryPoint variants={itemVariants}>
                          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: alpha(theme.palette.text.primary, 0.9) }}>
                            With a focus on establishing enduring relationships with our clients based on openness, integrity, and honesty, our team's experience enables us to offer customized solutions that are useful and efficient.
                          </Typography>
                        </StoryPoint>
                        
                        <StoryPoint variants={itemVariants}>
                          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: alpha(theme.palette.text.primary, 0.9) }}>
                            By keeping abreast of emerging trends and technologies, we are able to deliver superior products and services that precisely align with the needs of our clients. We have the expertise to produce results whether we are creating a blockchain-based loyalty program or implementing an AI-driven recommendation engine.
                          </Typography>
                        </StoryPoint>
                        
                        <StoryPoint variants={itemVariants}>
                          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: alpha(theme.palette.text.primary, 0.9) }}>
                            Our commitment to our clients' success motivates us to support them in thriving in the competitive travel sector.
                          </Typography>
                        </StoryPoint>
                      </motion.div>
                    </motion.div>
                  </StyledCard>
                </div>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </ParallaxBox>
      
      <Box 
        ref={processRef} 
        sx={{ position: 'relative', zIndex: 1, mb: 10 }}
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Process />
        </motion.div>
      </Box>
      
      <Footer />
    </>
  );
}