"use client";

import { Container, Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

const educationData = [
  {
    level: "B.Tech",
    institution: "Saveetha Institute of Medical and Technical Sciences",
    university: "Saveetha University",
    stream: "Information Technology",
    year: "2027",
    grade: "8.0 (CGPA)",
  },
  {
    level: "Intermediate (12th)",
    institution: "Narayana Junior College",
    university: "Board of Intermediate Education",
    stream: "Maths, Physics, Chemistry (MPC)",
    year: "2023",
    grade: "8.2 (GPA)",
  },
  {
    level: "SSC (10th)",
    institution: "ZP High School",
    university: "Board of Secondary Education",
    stream: "-",
    year: "2021",
    grade: "10 (GPA)",
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, sm: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{ letterSpacing: 0.5 }}
        >
          Education
        </Typography>

        {/* Flex wrapper for equal cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {educationData.map((edu, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                flex: "1 1 300px", // ensures all cards same width (min 300px)
                maxWidth: 360, // optional for consistent size
                display: "flex",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1,
                  flex: 1, // fills parent flex → equal height
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
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {edu.level}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  {edu.university}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {edu.stream}
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography variant="body2" fontWeight={600}>
                    Year: {edu.year}
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Grade: {edu.grade}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
