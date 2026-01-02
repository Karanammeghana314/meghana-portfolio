"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const internships = [
  {
    company: "Cognifyz Technologies",
    duration: "11.06.2025 to 19.07.2025",
  },
  {
    company: "Cloudside Technologies",
    duration: "01.08.2025 to 30.10.2025",
  },
];

export default function Internships() {
  return (
    <Box
      id="internships"
      sx={{
        py: { xs: 8, sm: 12 },
        backgroundColor: "background.paper",
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
          Internships
        </Typography>

        {/* Internship Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "flex-start",
          }}
        >
          {internships.map((intern, index) => (
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
                  sm: "0 1 calc(50% - 16px)", // tablet/desktop → 2 per row
                },
                display: "flex",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <WorkOutlineIcon
                    sx={{ mr: 1.5, color: "primary.main", fontSize: 28 }}
                  />
                  <Typography variant="h6" fontWeight={600}>
                    {intern.company}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Duration: {intern.duration}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
