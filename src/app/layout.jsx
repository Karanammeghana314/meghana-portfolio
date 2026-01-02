"use client";

import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import ColorModeContext from "@/theme/ColorModeContext";
import { getTheme } from "@/theme/theme";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <html lang="en">
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
