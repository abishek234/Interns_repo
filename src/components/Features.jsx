import React from 'react';
import Footer from "./ui/Footer";
import NeuralBackground from "../../src/components/neurons/neurons";
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardHeader, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Container,
  Grid,
  Grow,
  Zoom,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Technology icons (import your actual icons or use MUI icons)
import TensorflowIcon from '@mui/icons-material/Memory';
import PyTorchIcon from '@mui/icons-material/Science';
import ScikitLearnIcon from '@mui/icons-material/BarChart';
import NltkIcon from '@mui/icons-material/ChatBubble';
import SpacyIcon from '@mui/icons-material/TextFields';
import TransformersIcon from '@mui/icons-material/Transform';
import OpenCVIcon from '@mui/icons-material/Visibility';
import YoloIcon from '@mui/icons-material/FindInPage';
import TFObjectDetectionIcon from '@mui/icons-material/CameraAlt';
import KerasIcon from '@mui/icons-material/Layers';
import FastAIIcon from '@mui/icons-material/Speed';
import MXNetIcon from '@mui/icons-material/Apps';
import SparkIcon from '@mui/icons-material/FlashOn';
import HadoopIcon from '@mui/icons-material/Storage';
import FlinkIcon from '@mui/icons-material/Stream';
import NvidiaIcon from "@mui/icons-material/DeveloperBoard";
import GoogleTPUIcon from '@mui/icons-material/SmartToy';
import IntelIcon from '@mui/icons-material/Memory';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(8px)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 4,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
  },
}));

// Technology categories with their tools
const categories = [
  {
    title: 'Machine Learning',
    tools: [
      { name: 'TensorFlow', icon: <TensorflowIcon /> },
      { name: 'PyTorch', icon: <PyTorchIcon /> },
      { name: 'Scikit-Learn', icon: <ScikitLearnIcon /> },
    ],
  },
  {
    title: 'NLP',
    tools: [
      { name: 'NLTK', icon: <NltkIcon /> },
      { name: 'SpaCy', icon: <SpacyIcon /> },
      { name: 'Transformers', icon: <TransformersIcon /> },
    ],
  },
  {
    title: 'Computer Vision',
    tools: [
      { name: 'OpenCV', icon: <OpenCVIcon /> },
      { name: 'YOLO', icon: <YoloIcon /> },
      { name: 'TensorFlow Object Detection API', icon: <TFObjectDetectionIcon /> },
    ],
  },
  {
    title: 'Deep Learning',
    tools: [
      { name: 'Keras', icon: <KerasIcon /> },
      { name: 'FastAI', icon: <FastAIIcon /> },
      { name: 'MXNet', icon: <MXNetIcon /> },
    ],
  },
  {
    title: 'Big Data Processing',
    tools: [
      { name: 'Apache Spark', icon: <SparkIcon /> },
      { name: 'Hadoop', icon: <HadoopIcon /> },
      { name: 'Flink', icon: <FlinkIcon /> },
    ],
  },
  {
    title: 'AI Optimized Hardware',
    tools: [
      { name: 'NVIDIA GPUs', icon: <NvidiaIcon /> },
      { name: 'Google TPUs', icon: <GoogleTPUIcon /> },
      { name: 'Intel AI Accelerators', icon: <IntelIcon /> },
    ],
  },
];

export default function Features() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <NeuralBackground />
      
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 6,
            textAlign: 'center',
          }}
        >
          <Zoom in={true} style={{ transitionDelay: '100ms' }}>
            <SectionTitle variant="h3" component="h1" gutterBottom fontWeight="bold">
              AI TECHNOLOGIES
            </SectionTitle>
          </Zoom>
          <Grow in={true} style={{ transitionDelay: '300ms' }}>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '60%' }}>
              CUTTING-EDGE AI TOOLS FOR TRANSFORMATIVE SOLUTIONS
            </Typography>
          </Grow>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={4} 
              key={category.title}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Grow in={true} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <Box sx={{ width: '100%', maxWidth: '350px' }}>
                  <StyledCard>
                    <CardHeader 
                      title={
                        <CategoryTitle variant="h5">
                          {category.title}
                        </CategoryTitle>
                      } 
                      sx={{ 
                        pb: 0, 
                        height: '80px', 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'center',
                    }}>
                      <List disablePadding>
                        {category.tools.map((tool) => (
                          <ListItem 
                            key={tool.name}
                            sx={{
                              transition: 'all 0.3s',
                              borderRadius: 2,
                              mb: 1,
                              '&:hover': {
                                backgroundColor: alpha('#4285F4', 0.1),
                                transform: 'translateX(8px)',
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              {tool.icon}
                            </ListItemIcon>
                            <ListItemText 
                              primary={tool.name} 
                              primaryTypographyProps={{ 
                                fontWeight: 'medium',
                                variant: 'body2',
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </StyledCard>
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
}