"use client";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "@/theme/ColorModeContext";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Internships", id: "internships" },
  { label: "Certifications", id: "certifications" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // Scroll handler with delay to ensure DOM exists
  const handleScroll = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight={700}>KARANAM MEGHANA</Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map(item => (
              <Button key={item.id} onClick={() => handleScroll(item.id)}>
                {item.label}
              </Button>
            ))}

            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <IconButton sx={{ display: { md: "none" } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260 }}>
          {menuItems.map(item => (
            <ListItem
                component="button"
                style={{background: 'none', border:'none', color: theme.palette.mode === "dark" ? '#FFFFFF' : '#000000'}}
                key={item.id}
                onClick={() => handleScroll(item.id)}
            >
                {item.label}
            </ListItem>
          ))}

          <ListItem>
            <Button
              fullWidth
              startIcon={theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
