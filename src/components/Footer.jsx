"use client";

import { Box, Typography, IconButton, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      py={4}
      bgcolor="#0F172A"
      color="white"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Left side: Copyright */}
        <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 16 } }}>
          © 2026 Karanam Meghana. All rights reserved.
        </Typography>

        {/* Right side: Social Icons */}
        <Box>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/karanam-meghana-15979b2a9/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#0A66C2" },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/Karanammeghana314/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#6e5494" },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/maxxuu1436/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#E1306C" },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
