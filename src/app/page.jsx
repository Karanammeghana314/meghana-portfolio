import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import Internships from "@/components/Internships";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box id="home">
        <Hero />
      </Box>

      <Box id="education">
        <About />
      </Box>

      <Box id="skills">
        <Skills />
      </Box>

      <Box id="internships">
        <Internships />
      </Box>

      <Box id="certifications">
        <Certifications />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
