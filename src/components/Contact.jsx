"use client";

import { Box, Container, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const handleSubmit = () => {
    if (!email && !phone) {
      setSnackbarMsg("Please enter your Email or Phone number!");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    setSnackbarMsg("This feature is not enabled !");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);

    // const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // include country code, e.g., 919876543210
    // const text = `Contact Form Submission:%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    // const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;

    // window.open(whatsappLink, "_blank");

    // setSnackbarMsg("Your message has been sent successfully!");
    // setSnackbarSeverity("success");
    // setSnackbarOpen(true);

    // Reset form
    setEmail("");
    setPhone("");
    setMessage("");
    return;
  };

  return (
    <Box
      id="contact"
      sx={{ py: { xs: 8, sm: 12 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{ letterSpacing: 0.5 }}
        >
          Contact Me
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Email ID"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              py: 1.8,
              mt: 2,
              background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>

        {/* Snackbar at top-right */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }} // <-- top-right
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
