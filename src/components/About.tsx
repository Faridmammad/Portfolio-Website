import React from 'react';
import { Container, Typography, Grid, Box, Paper, Avatar, useTheme } from '@mui/material';
import { Code as CodeIcon, Palette as DesignIcon, Rocket as RocketIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import avatarImg from '../assets/images/avatar.png'; 



const About: React.FC = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconColor = theme.palette.primary.main;

  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 48, color: iconColor }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices and industry standards.'
    },
    {
      icon: <DesignIcon sx={{ fontSize: 48, color: iconColor }} />,
      title: 'User Experience',
      description: 'Creating intuitive and engaging user interfaces that provide seamless user experiences across all devices.'
    },
    {
      icon: <RocketIcon sx={{ fontSize: 48, color: iconColor }} />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and smooth interactions to deliver exceptional user experiences.'
    }
  ];

  return (
    <section
      id="about"
      style={{ backgroundColor: theme.palette.background.paper, padding: theme.spacing(12, 2) }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.03em',
              }}
            >
              About <Box component="span" sx={{ color: iconColor }}>Me</Box>
            </Typography>
            
          </Box>

          <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 'bold', mb: 4, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
                >
                  Who I Am
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.7,
                  }}
                >
                  I'm a dedicated frontend developer with a passion for creating exceptional digital experiences. 
                  With expertise in React, TypeScript, and modern CSS frameworks, I bring designs to life with 
                  clean, efficient code and attention to detail.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.7,
                  }}
                >
                  My journey in web development started with a curiosity about how things work on the internet, 
                  and it has evolved into a career focused on building user-friendly, performant applications 
                  that solve real-world problems.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.7,
                  }}
                >
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 100%)',
                    boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                    textAlign: 'center',
                    maxWidth: 280,
                    width: '100%',
                  }}
                >
                  <Avatar
                    src={avatarImg}
                    alt="Farid Mammadov"
                    sx={{
                      width: 180,
                      height: 180,
                      mx: 'auto',
                      mb: 3,
                      border: `5px solid white`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '600', color: theme.palette.text.primary }}
                  >
                    Frontend Developer
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Features Grid */}
          <Grid container spacing={5}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 5,
                      height: '100%',
                      borderRadius: '20px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 25px rgba(59, 130, 246, 0.3)',
                        transform: 'translateY(-6px)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
