import React, { useCallback } from 'react';
import { Container, Typography, Button, Box, Grid, useTheme } from '@mui/material';
import { KeyboardArrowDown as ArrowDownIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Hero: React.FC = () => {
  const theme = useTheme();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Particles init
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        padding: theme.spacing(8, 2),
        overflow: 'hidden',
      }}
    >
      {/* Text Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 12,
            },
            shape: {
              type: 'char',
              character: [
                { value: 'React', font: 'Verdana', style: '', weight: '400' },
                { value: 'TypeScript', font: 'Verdana', style: '', weight: '400' },
                { value: 'Node.js', font: 'Verdana', style: '', weight: '400' },
                { value: ';', font: 'Verdana', style: '', weight: '400' },
                { value: 'CSS3', font: 'Verdana', style: '', weight: '400' },
                { value: 'MERN', font: 'Verdana', style: '', weight: '400' },
                { value: 'JavaScript', font: 'Verdana', style: '', weight: '400' },
                { value: 'Tailwind', font: 'Verdana', style: '', weight: '400' },
                { value: 'SCSS', font: 'Verdana', style: '', weight: '400' },
                { value: 'HTML5', font: 'Verdana', style: '', weight: '400' },
              ],
            },
            color: {
              value: ['#61DAFB', '#3178C6', '#68A063', '#F7DF1E', '#06B6D4', '#C76494', '#E34F26'],
            },
            opacity: {
              value: 0.4, 
            },
            size: {
              value: 12, 
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: 'out',
            },
          },
          background: {
            color: 'transparent',
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                  lineHeight: 1.1,
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.03em',
                }}
              >
                Hi, I'm Farid
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  color: '#e2e8f0',
                }}
              >
                Frontend Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  maxWidth: 700,
                  mx: 'auto',
                  color: '#94a3b8',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                I design and develop elegant, responsive, and intuitive web solutions using the latest technologies. My code is crafted with precision and care — clean, efficient, and occasionally so well-structured it feels like it should be framed.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  gap: 3,
                  mb: 6,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToAbout}
                  sx={{
                    px: 6,
                    py: 1.8,
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    boxShadow: '0 8px 15px rgba(59, 130, 246, 0.3)',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '50px',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      boxShadow: '0 12px 20px rgba(99, 102, 241, 0.5)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  Learn More
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#portfolio"
                  sx={{
                    px: 6,
                    py: 1.8,
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    borderColor: '#8b5cf6',
                    color: '#8b5cf6',
                    borderRadius: '50px',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      borderColor: '#7c3aed',
                      color: '#7c3aed',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  View My Work
                </Button>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
                {[{
                  icon: <GitHubIcon />,
                  label: 'GitHub',
                  href: 'https://github.com/faridmammad',
                }, {
                  icon: <LinkedInIcon />,
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/faridmammad',
                }].map(({ icon, label, href }) => (
                  <Button
                    key={label}
                    variant="contained"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={icon}
                    sx={{
                      backgroundColor: '#1e293b',
                      color: '#e2e8f0',
                      px: 3,
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: '40px',
                      textTransform: 'none',
                      boxShadow: '0 4px 8px rgba(99, 102, 241, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#4338ca',
                        color: '#e0e7ff',
                        boxShadow: '0 8px 15px rgba(99, 102, 241, 0.4)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              {/* Scroll Indicator (moved below social links) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                  textAlign: 'center',
                }}
              >
                <Button
                  onClick={scrollToAbout}
                  sx={{
                    color: '#94a3b8',
                    '&:hover': { color: '#8b5cf6' },
                    animation: 'bounce 2.5s infinite',
                    fontSize: '2rem',
                  }}
                >
                  <ArrowDownIcon fontSize="inherit" />
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
