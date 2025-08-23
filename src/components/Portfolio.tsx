import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Paper, Button, Chip, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon, Code as CodeIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import edupol from '../assets/images/edupol.webp';
import minddesk from '../assets/images/minddesk.png';
import headway from '../assets/images/headway.png';
import ecommerce from '../assets/images/ecommerce.jpg';
import portfolio from '../assets/images/portfolio.png';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Paragliding market - Ecommerce',
      description: 'A full-stack e-commerce platform for paragliding equipment. Features secure payments with Stripe, a responsive frontend built with React and TypeScript.',
      image: ecommerce,
      technologies: ['React', 'TypeScript', 'Stripe', 'Chart.js'],
      category: 'fullstack',
      github: 'https://github.com/Faridmammad/Paramarket',
      live: 'https://faridmammad.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Edupol Study Abroad',
      description: 'A modern, responsive website for Edupol Study Abroad - Azerbaijan’s trusted consultancy for international education and student mobility.',
      image: edupol ,
      technologies: ['React', 'TypeScript', 'Node.js'],
      category: 'frontend',
      github: 'https://github.com/Faridmammad/edupol-study-abroad',
      live: 'https://edupol-study-abroad.vercel.app/',
      featured: false,
    },

    {
      id: 3,
      title: 'SAT Math Tutor',
      description: 'An interactive web application designed to help students prepare for SAT Math through randomized question generation, timed quizzes, and step-by-step solution explanations.',
      image: ecommerce,
      technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com/Faridmammad/SAT_Math_teacher',
      live: 'https://faridmammad.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Headway Education',
      description: 'A modern, responsive website for Headway Education - Azerbaijans leading educational consultancy agency.',
      image: headway,
      technologies: ['React', 'TypeScript', 'Email.js'],
      category: 'frontend',
      github: 'https://github.com/Faridmammad/Headway-Education',
      live: 'https://headway-education.vercel.app/',
      featured: false,
    },
    
    {
      id: 5,
      title: 'Minddesk CRUD app',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: minddesk,
      technologies: ['React', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/faridmammad/minddesk',
      live: 'https://minddesk.onrender.com/',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
      image: portfolio,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/faridmammad/portfolio',
      live: 'https://faridmammad.com',
      featured: false,
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <Container maxWidth="lg" className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box className="text-center mb-16">
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My <span>Portfolio</span>
            </Typography>
          
          </Box>

          {/* Filter Buttons */}
          <Box className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'contained' : 'outlined'}
                onClick={() => setActiveFilter(filter.key)}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '9999px',
                  fontWeight: 600,
                  background: activeFilter === filter.key 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' 
                    : undefined,
                  color: activeFilter === filter.key ? '#fff' : undefined,
                  '&:hover': {
                    background: activeFilter === filter.key 
                      ? 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' 
                      : undefined,
                  },
                  textTransform: 'none',
                }}
              >
                {filter.label}
              </Button>
            ))}
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={5}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      position: 'relative',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: 6,
                      },
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />

                    {project.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'warning.main',
                          color: 'common.white',
                          fontWeight: 'bold',
                          px: 1.5,
                          py: 0.3,
                          borderRadius: '12px',
                          boxShadow: 3,
                          userSelect: 'none',
                        }}
                      />
                    )}

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: '600', mb: 1.5, color: 'text.primary' }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.5 }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'grey.100',
                              color: 'text.secondary',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'default',
                              userSelect: 'none',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>

                    <CardActions sx={{ px: 2, pt: 0, pb: 2 }}>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' },
                          textTransform: 'none',
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': { color: 'primary.dark' },
                          textTransform: 'none',
                        }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-20"
          >
            <Paper
              elevation={3}
              sx={{
                p: 6,
                borderRadius: 4,
                background: 'linear-gradient(90deg, #e0e7ff, #c7d2fe)',
                boxShadow: 4,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: '700', mb: 2, color: 'text.primary' }}
              >
                Interested in Working Together?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
              >
                I'm always open to discussing new opportunities, interesting projects, and creative ideas. 
                Let's connect and build something amazing together!
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                startIcon={<CodeIcon />}
                sx={{
                  px: 6,
                  py: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  },
                  boxShadow: 3,
                  textTransform: 'none',
                }}
              >
                Get In Touch
              </Button>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;
