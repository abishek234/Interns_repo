import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NeuronBackground from "../components/neurons/neurons";

export default function Hero() {
  const navigate = useNavigate();
  const primaryNeuronColor = "#816dd0";

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <Box
      sx={{
        background: "transparent",
        py: { xs: 8, md: 12 },
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Typography
              variant="h6"
              sx={{
                color: primaryNeuronColor,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
              }}
            >
              MyEconics
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.3,
                mb: 3,
                color: primaryNeuronColor,
              }}
            >
              Welcome to{" "}
              <Box component="span" sx={{ color: primaryNeuronColor }}>
                MyEconics
              </Box>
              :<br />
              <Box component="span" sx={{ color: primaryNeuronColor }}>
                Pioneering AI-Driven Business Solutions
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: primaryNeuronColor,
                fontSize: "1.125rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              At{" "}
              <Box component="span" fontWeight="bold" sx={{ color: primaryNeuronColor }}>
                MyEconics
              </Box>
              , we harness the power of Artificial Intelligence
              to revolutionize your business. Our global team of AI experts and
              tech visionaries is dedicated to creating intelligent, scalable
              solutions that drive{" "}
              <Box component="span" fontWeight="bold" sx={{ color: primaryNeuronColor }}>
                growth
              </Box>{" "}
              and{" "}
              <Box component="span" fontWeight="bold" sx={{ color: primaryNeuronColor }}>
                efficiency
              </Box>
              .
            </Typography>

            <Button
              variant="outlined"
              size="large"
              onClick={handleButtonClick}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                color: primaryNeuronColor,
                borderColor: primaryNeuronColor,
                "&:hover": {
                  backgroundColor: "rgba(129, 109, 208, 0.1)",
                  borderColor: primaryNeuronColor,
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Animated background */}
      <NeuronBackground />
    </Box>
  );
}
