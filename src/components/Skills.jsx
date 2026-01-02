"use client";

import { Grid, Paper, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const skills = ["C", "C++", "Python", "JAVA", "SQL"];

export default function Skills() {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h4" mb={4}>
        Skills
      </Typography>

      <Grid container spacing={3}>
        {skills.map(skill => (
          <Grid item xs={6} md={3} key={skill}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.08 }}
              sx={{ py: 1, px:3, textAlign: "center" }}
            >
              <Typography fontWeight={600}>{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
