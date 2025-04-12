import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  CircularProgress,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import service1 from "./assets/service1.png";
import NeuralBackground from "../../src/components/neurons/neurons"; // Added import for NeuralBackground

// Enhanced Domain Card with dynamic hover effects
const DomainCard = styled(Card)(({ theme, index }) => ({
  position: 'relative',
  maxWidth: 320,
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(12px)',
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  opacity: 0,
  animation: `fadeIn 0.6s ease-out forwards ${0.3 + index * 0.15}s`,
  '&:hover': {
    transform: 'translateY(-18px) scale(1.03)',
    boxShadow: '0 20px 40px rgba(101, 31, 255, 0.25)',
    '& .glow-effect': {
      opacity: 1,
    },
    '& .MuiCardMedia-root': {
      transform: 'scale(1.08)',
      filter: 'brightness(1.1) contrast(1.1)',
    },
    '& .card-dots': {
      transform: 'scale(1.3)',
      opacity: 0.9,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.8,
    transition: 'all 0.3s ease',
    zIndex: 1,
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
}));

// Enhanced Card Media with better transitions
const AnimatedCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'all 0.7s ease',
  transform: 'scale(1)',
  filter: 'brightness(1) contrast(1)',
}));

// Enhanced Glowing Button with more dynamic effects
const GlowButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: '#fff',
  fontWeight: 600,
  padding: `${theme.spacing(1.2)} ${theme.spacing(3.5)}`,
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0 6px 15px rgba(101, 31, 255, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'all 0.4s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    transition: 'all 0.6s ease',
    zIndex: -1,
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(101, 31, 255, 0.3)',
    '&::before': {
      left: '100%',
    }
  },
  '&:active': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(101, 31, 255, 0.25)',
  }
}));

// Enhanced Animated Heading with more dynamic underline
const AnimatedHeading = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingBottom: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 4,
    borderRadius: '2px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
    animation: 'expandWidth 1.5s forwards ease-out',
    boxShadow: '0 0 10px rgba(101, 31, 255, 0.5)',
  },
  '@keyframes expandWidth': {
    '0%': { width: '0px' },
    '50%': { width: '80px' },
    '100%': { width: '120px' }
  }
}));

// Card glow effect overlay
const CardGlowEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}33 0%, ${theme.palette.secondary.main}22 100%)`,
  opacity: 0,
  transition: 'opacity 0.5s ease',
  zIndex: 0,
  pointerEvents: 'none',
  mixBlendMode: 'overlay',
}));

// Animated page wrapper
const AnimatedPageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}11 0%, ${theme.palette.background.default}00 100%)`,
    zIndex: 0,
  }
}));

export default function Career() {
    const [domains, setDomains] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const wrapperRef = useRef(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e) => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching domains
                const domainsResponse = await axios.get('http://localhost:3000/jobs/domains');
                setDomains(domainsResponse.data);
                
                // Fetching jobs
                const jobsResponse = await axios.get('http://localhost:3000/jobs/');
                setJobs(jobsResponse.data);
                
                // Set loading to false when data is fetched
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setLoading(false);
            }
        };
        fetchData();
        
        // Add a delay to allow animations to be more visible
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        
        return () => clearTimeout(timer);
    }, []);

    // Placeholder data in case the API fails
    const placeholderDomains = [
        { domain: "Machine Learning" },
        { domain: "Web Development" },
        { domain: "Data Science" },
        { domain: "Cloud Computing" },
        { domain: "Artificial Intelligence" },
        { domain: "DevOps Engineering" }
    ];
    
    const displayDomains = domains.length > 0 ? domains : placeholderDomains;

    return (
        <>
            <Navbar />
            <AnimatedPageWrapper 
                ref={wrapperRef}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
            >
                {/* Using imported NeuralBackground component instead of custom neural design */}
                <NeuralBackground />
                
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box textAlign="center" mb={8}>
                        <AnimatedHeading
                            variant="h3"
                            component="h1"
                            fontWeight="bold"
                            color="primary"
                            sx={{
                                textShadow: '0 2px 10px rgba(101, 31, 255, 0.2)',
                                transform: mousePosition.x ? `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)` : 'none',
                                transition: 'transform 0.5s ease-out'
                            }}
                        >
                            Career Opportunities
                        </AnimatedHeading>
                        <Typography 
                            variant="h6" 
                            color="textSecondary" 
                            mt={3} 
                            mb={5}
                            sx={{
                                opacity: 0,
                                animation: 'fadeIn 1s ease-out forwards 0.8s',
                                '@keyframes fadeIn': {
                                    from: { opacity: 0, transform: 'translateY(20px)' },
                                    to: { opacity: 1, transform: 'translateY(0)' }
                                }
                            }}
                        >
                            Join our team and be part of the future of technology
                        </Typography>
                    </Box>
                    
                    {loading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
                            <CircularProgress 
                                color="primary" 
                                size={70} 
                                thickness={4} 
                                sx={{
                                    '& .MuiCircularProgress-circle': {
                                        strokeLinecap: 'round',
                                        animationDuration: '1.5s',
                                    },
                                    boxShadow: '0 0 30px rgba(101, 31, 255, 0.2)'
                                }}
                            />
                        </Box>
                    ) : displayDomains.length > 0 ? (
                        <Grid container spacing={4} justifyContent="center">
                            {displayDomains.map((domain, index) => (
                                <Grid item xs={12} sm={6} md={4} key={domain.domain}>
                                    <DomainCard index={index}>
                                        <CardGlowEffect className="glow-effect" />
                                        <AnimatedCardMedia
                                            component="img"
                                            image={service1}
                                            alt={domain.domain}
                                        />
                                        <CardContent sx={{ p: 3, position: 'relative', zIndex: 5 }}>
                                            <Typography 
                                                gutterBottom 
                                                variant="h5" 
                                                component="div" 
                                                fontWeight="bold"
                                                sx={{
                                                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    textShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                                }}
                                            >
                                                {domain.domain}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                Explore exciting opportunities in {domain.domain} and join our innovative team.
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <GlowButton
                                                    component={Link}
                                                    to={`/jobs/${encodeURIComponent(domain.domain)}`}
                                                    endIcon={<ArrowForwardIcon />}
                                                >
                                                    Apply Now
                                                </GlowButton>
                                            </Box>
                                        </CardContent>
                                        
                                        {/* Neural decorative dots on the card with enhanced animation */}
                                        {[...Array(4)].map((_, i) => (
                                            <Box
                                                key={i}
                                                className="card-dots"
                                                sx={{
                                                    position: 'absolute',
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.main,
                                                    opacity: 0.5,
                                                    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                                                    top: `${15 + (i * 23)}%`,
                                                    right: 12,
                                                    zIndex: 6,
                                                    transition: 'all 0.4s ease',
                                                    animation: `blink ${1.5 + Math.random() * 2}s ease-in-out infinite alternate ${Math.random()}s`,
                                                    '@keyframes blink': {
                                                        from: { opacity: 0.3, transform: 'scale(0.7)' },
                                                        to: { opacity: 0.7, transform: 'scale(1.3)' }
                                                    }
                                                }}
                                            />
                                        ))}
                                    </DomainCard>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Box 
                            textAlign="center" 
                            py={10}
                            sx={{
                                background: 'rgba(255,255,255,0.7)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: theme.spacing(3),
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                padding: theme.spacing(5)
                            }}
                        >
                            <Typography variant="h5" color="textSecondary">
                                No career domains found. Check back later for new opportunities.
                            </Typography>
                        </Box>
                    )}
                </Container>
            </AnimatedPageWrapper>
            <Footer />
        </>
    );
}