"use client";

import { Container, Grid, Typography, Button, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from '../assets/meghana.jpeg';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              spacing={3}
            >
              <Typography variant="h3" fontWeight={700}>
                Hi, I’m{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  KARANAM MEGHANA
                </Box>
              </Typography>

              <Typography variant="h5" color="text.secondary">
                Fullstack Developer
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button 
                    target="_blank"
                    rel="noopener noreferrer" 
                    variant="outlined" 
                    size="large" 
                    href="https://drive.google.com/file/d/1sL0UmR7kvW5bLFSDSLlknSQCLPSX5bMB/view?usp=sharing"
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Gradient Ring */}
              <Box
                sx={{
                  p: 1,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #6366F1, #22D3EE)",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 220, sm: 260, md: 300 },
                    height: { xs: 220, sm: 260, md: 300 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "background.paper",
                  }}
                >
                  <Image
                    src={profile}
                    alt="Profile"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
