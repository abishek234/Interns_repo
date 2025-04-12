import { Box, Container, CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ServiceCards from "./ServiceCards";
import Contact from "./Contact";
import Footer from "./ui/Footer";
import NeuronBackground from "../components/neurons/neurons";

// Custom theme with colors that will complement the neuron background
let theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#757de8",
      dark: "#002984",
    },
    secondary: {
      main: "#f50057",
      light: "#ff5983",
      dark: "#bb002f",
    },
    background: {
      default: "rgba(255, 255, 255, 0.92)", // Slightly transparent to let neurons show through
      paper: "rgba(242, 247, 255, 0.85)", // Semi-transparent to allow neurons to be visible
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [...createTheme().shadows],
});

theme = responsiveFontSizes(theme);

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Neuron Background - positioned as the first element to ensure it's behind everything */}
      <Box 
        sx={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          zIndex: -1,
          opacity: 0.7, // Increased opacity for better visibility
          // Add a subtle gradient overlay to enhance neuron visibility
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(240,245,255,0.15) 100%)",
            zIndex: 1,
          }
        }}
      >
        <NeuronBackground />
      </Box>

      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "100vh",
          position: "relative", 
          overflowX: "hidden",
          // This ensures content doesn't hide neurons completely
          "& > *:not(:first-child)": {
            backdropFilter: "blur(2px)", // Subtle blur effect to separate content from background
          }
        }}
      >
        {/* Navbar - semi-transparent to show neurons */}
        <Box sx={{ 
          position: "sticky", 
          top: 0, 
          zIndex: 1100, 
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)" // Creates a frosted glass effect
        }}>
          <Navbar />
        </Box>

        {/* Hero - with gradient that complements neurons */}
        <Box
          sx={{
            background: "linear-gradient(145deg, rgba(242,247,255,0.7) 0%, rgba(230,240,254,0.7) 100%)",
            pb: { xs: 4, md: 6 },
            position: "relative",
            // Add a subtle effect to make neurons more visible in this section
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(255,255,255,0.2)",
              zIndex: -1,
            }
          }}
        >
          <Hero />
        </Box>

        {/* About - with glass-like effect to show neurons through */}
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              my: { xs: 6, md: 10 },
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transform: "translateY(-40px)",
            }}
          >
            <About />
          </Box>
        </Container>

        {/* Services - with enhanced transparency */}
        <Box 
          sx={{ 
            py: { xs: 6, md: 10 },
            position: "relative",
            background: "rgba(242,247,255,0.6)",
            backdropFilter: "blur(5px)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              background: "linear-gradient(180deg, rgba(242,247,255,0) 0%, rgba(224,236,255,0.3) 100%)",
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Services />
          </Container>
        </Box>

        {/* Service Cards - with glassmorphism effect */}
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              my: { xs: 6, md: 10 },
              "& > *": {
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(8px)",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 70px -12px rgba(0,0,0,0.2)",
                  background: "rgba(255,255,255,0.9)",
                }
              }
            }}
          >
            <ServiceCards />
          </Box>
        </Container>

        {/* Contact - with subtle transparency */}
        <Box 
          sx={{ 
            background: "linear-gradient(135deg, rgba(246,249,252,0.75) 0%, rgba(241,247,255,0.75) 100%)",
            backdropFilter: "blur(5px)",
            py: { xs: 6, md: 10 },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: "linear-gradient(0deg, rgba(63,81,181,0.03) 0%, rgba(63,81,181,0) 100%)",
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Contact />
          </Container>
        </Box>

        {/* Footer - semi-transparent to show neurons */}
        <Box sx={{ 
          mt: "auto", 
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.05)" 
        }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;