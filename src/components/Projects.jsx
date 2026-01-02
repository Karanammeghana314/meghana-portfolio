"use client";

import {
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Typography,
  Grid,
  Container,
} from "@mui/material";

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const projects = [
  {
    title: "Decentralized Financial System",
    desc:
      "A project that uses Artificial Neural Networks (ANN) and Support Vector Machines (SVM) to compare their effectiveness in securing a decentralized financial system. The project aims to improve transaction security and reliability by detecting fraudulent activities.",
    attr: [
      "Ability to work effectively under pressure",
      "Maintaining healthy personal relationships with the team",
      "Team player with strong work ethics and commitment",
      "Quick learner of new initiatives",
      "Ability to meet deadlines through effective time management",
    ],
  },
];

export default function Projects() {
  return (
    <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{ letterSpacing: 0.5 }}
        >
          PROJECTS
        </Typography>

      <Grid container spacing={4}>
        {/* {projects.map(project => (
          <Grid item xs={12} md={4} key={project.title}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">
                  {project.title}
                </Typography>
                <Typography mt={1}>
                  {project.desc}
                </Typography>
                <Typography mt={1}>
                  {project.attr}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Live</Button>
                <Button size="small">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))} */}
        {projects.map(project => (
  <Card key={project.title} sx={{ mb: 4 }}>
    <CardContent>
      <Typography variant="h6" fontWeight={600}>
        {project.title}
      </Typography>

      <Typography mt={1} mb={2} color="text.secondary">
        {project.desc}
      </Typography>

      <List dense>
        {project.attr.map((point, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleIcon
                color="primary"
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText primary={point} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
))}
      </Grid>
    </Container>
  );
}
