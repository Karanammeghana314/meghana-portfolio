"use client";

import { Container, Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

const certifications = [
  {
    title: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
  },
  {
    title: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle",
  },
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
      sx={{
        py: { xs: 8, sm: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{ letterSpacing: 0.5 }}
        >
          Certifications
        </Typography>

        {/* Flexbox wrapper */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "flex-start",
          }}
        >
          {certifications.map((cert, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                flex: {
                  xs: "0 1 100%", // mobile → full width
                  sm: "0 1 calc(50% - 16px)", // tablet/desktop → 2 cards per row
                },
                display: "flex",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <SchoolIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography variant="h6" fontWeight={600}>
                    {cert.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Issued by: {cert.issuer}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
