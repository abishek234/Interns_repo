import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import JobCard from './JobCard';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Grow,
  Button
} from '@mui/material';
import NeuronBackground from '../../src/components/neurons/neurons';

export default function DomainJobs({ jobs }) {
  const { domain } = useParams();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const filteredJobs = jobs.filter(job => job.domain === domain);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: theme.palette.mode === 'dark' ? '#0a1929' : '#f8fafc',
        overflow: 'hidden'
      }}
    >
      <NeuronBackground density={0.8} speed={0.6} />
      <Navbar />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 12, pb: 10 }}>
        <Box mb={8} textAlign="center">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontSize: { xs: '2rem', md: '3rem' },
              textShadow: `0 2px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
              animation: 'pulse 2s infinite ease-in-out'
            }}
          >
            {domain} Jobs
          </Typography>

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
              },
              '@keyframes pulse': {
                '0%': { opacity: 0.8 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.8 }
              }
            }}
          />

          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
              color: alpha(theme.palette.text.primary, 0.8),
              mt: 2,
              animation: 'fadeIn 1.5s ease-in-out',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              }
            }}
          >
            Discover the latest opportunities in {domain} that match your skills and experience
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Grid item xs={12} sm={10} md={6} lg={4} key={job._id || index}>
                <Grow in={!isLoading} timeout={1000 + index * 200}>
                  <div
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      transform: hoveredCard === index ? 'translateY(-10px)' : 'none'
                    }}
                  >
                    <Box
                      sx={{
                        background: theme.palette.mode === 'dark' 
                          ? `linear-gradient(145deg, ${alpha('#1a2942', 0.9)}, ${alpha('#0d1728', 0.8)})` 
                          : `linear-gradient(145deg, ${alpha('#ffffff', 0.9)}, ${alpha('#f5f7fa', 0.8)})`,
                        borderRadius: '16px',
                        overflow: 'hidden',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                        boxShadow: hoveredCard === index
                          ? `0 20px 30px ${alpha(theme.palette.text.primary, 0.1)}, 0 0 15px ${alpha(theme.palette.primary.main, 0.2)}`
                          : `0 8px 20px ${alpha(theme.palette.text.primary, 0.07)}`,
                        transition: 'all 0.4s ease-out',
                        position: 'relative',
                        '&::before': hoveredCard === index ? {
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
                          opacity: 0.7
                        } : {},
                        '@keyframes rotate': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <Box
                          sx={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: 2.5,
                            boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                            transform: hoveredCard === index ? 'scale(1.05) rotate(5deg)' : 'scale(1)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 'bold',
                              color: 'white',
                              fontSize: '1.25rem'
                            }}
                          >
                            JOB
                          </Typography>
                        </Box>

                        <Typography
                          variant="h5"
                          component="h2"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.text.primary,
                            fontSize: '1.4rem'
                          }}
                        >
                          {job.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            mb: 2.5,
                            color: alpha(theme.palette.text.secondary, 0.9),
                            fontWeight: 500
                          }}
                        >
                          {job.description}
                        </Typography>

                        <Box
                          sx={{
                            p: 1.5,
                            background: alpha(theme.palette.background.paper, 0.4),
                            borderRadius: '8px',
                            mb: 2.5,
                            width: '100%'
                          }}
                        >
                          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                            <Box component="span" sx={{ color: alpha(theme.palette.text.secondary, 0.7), mr: 1 }}>
                              Domain:
                            </Box>
                            {job.domain}
                          </Typography>
                          
                          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mt: 1 }}>
                            <Box component="span" sx={{ color: alpha(theme.palette.text.secondary, 0.7), mr: 1 }}>
                              Duration:
                            </Box>
                            {job.duration}
                          </Typography>
                        </Box>

                        <Button
                          variant="contained"
                          sx={{
                            backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}`,
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                            '&:hover': {
                              backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                              boxShadow: `0 6px 14px ${alpha(theme.palette.primary.main, 0.6)}`,
                              transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                          endIcon={
                            <Box component="span" sx={{ ml: 0.5 }}>→</Box>
                          }
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </Grow>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  px: 4,
                  background: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 4,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.text.primary, 0.1)}`
                }}
              >
                <Typography variant="h5" color="text.secondary">
                  No jobs found in this domain
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

DomainJobs.propTypes = {
  jobs: PropTypes.array.isRequired
};