"use client";

import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6366F1",
      },
      background: {
        default: mode === "dark" ? "#020617" : "#F8FAFC",
        paper: mode === "dark" ? "#020617" : "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
    shape: {
      borderRadius: 14,
    },
  });
