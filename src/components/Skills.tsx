import React from 'react';
import { Container, Typography, Grid, Box, Paper, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'HTML5', level: 90, color: '#E34F26' },
        { name: 'CSS3/SCSS', level: 88, color: '#1572B6' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Express.js', level: 75, color: '#000000' },
        { name: 'MongoDB', level: 70, color: '#47A248' },
        { name: 'REST APIs', level: 85, color: '#FF6B6B' },
        { name: 'GraphQL', level: 70, color: '#E10098' },
      ],
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git & GitHub', level: 90, color: '#F05032' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Figma', level: 75, color: '#F24E1E' },
        { name: 'Webpack', level: 70, color: '#8DD6F9' },
        { name: 'Agile/Scrum', level: 85, color: '#FF6B35' },
      ],
    },
  ];

  const additionalSkills = [
    'Responsive Design', 'Progressive Web Apps', 'Performance Optimization',
    'Cross-browser Compatibility', 'Accessibility (WCAG)', 'SEO Best Practices',
    'Testing (Jest, React Testing Library)', 'CI/CD Pipelines', 'Docker Basics',
    'AWS Fundamentals', 'Microservices Architecture', 'State Management (Redux, Zustand)'
  ];

  const softSkills = [
    'Team Collaboration', 'Problem Solving', 'Time Management', 'Adaptability',
    'Critical Thinking', 'Creativity', 'Communication Skills', 'Leadership'
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <Container maxWidth="lg" className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
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
              My <span>Skills</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.15rem',
                maxWidth: '700px',
                margin: '0 auto',
                color: '#4b5563',
                textAlign: 'center',
                lineHeight: 1.7,
              }}
            >
              A finely tuned blend of technical expertise and creative problem-solving. I design elegant UIs and scalable solutions.
            </Typography>
          </Box>

          {/* Skill Categories */}
          <Grid container spacing={6} className="mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: categoryIndex * 0.3 }}
                >
                  <Paper
                    elevation={0}
                    className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    sx={{
                      background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
                      borderRadius: '1.5rem',
                      border: '1px solid #e5e7eb',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(145deg, #f9fafb, #f3f4f6)',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 4,
                        color: '#1f2937',
                        textAlign: 'center',
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box className="flex justify-between items-center mb-1">
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 500, color: '#374151' }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: '#6b7280' }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={inView ? skill.level : 0}
                            sx={{
                              height: 10,
                              borderRadius: 5,
                              backgroundColor: '#e0e7ff',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: skill.color,
                                borderRadius: 5,
                                transition: 'width 1s ease-in-out',
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Paper
              elevation={0}
              className="p-12 rounded-3xl"
              sx={{
                backgroundColor: '#fafafa',
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  background: 'linear-gradient(90deg,rgb(0, 0, 0), #9ca3af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  mb: 6,
                  textAlign: 'center',
                }}
              >
                Additional Skills & Knowledge
              </Typography>

              <Box className="flex flex-wrap justify-center gap-4 mb-8">
                {additionalSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: '#e7e5f9',
                      color: '#4b4b7f',
                      fontWeight: 600,
                      borderRadius: '20px',
                      px: 2,
                      py: 1,
                      boxShadow: 'inset 0 0 5px #d1c4e9',
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#c4b5fd',
                        boxShadow: '0 4px 10px rgba(109, 94, 255, 0.3)',
                        color: '#312e81',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Soft Skills Section */}
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  color: '#4b5563',
                  fontWeight: 700,
                }}
              >
                Soft Skills
              </Typography>
              <Box className="flex flex-wrap justify-center gap-4 mb-8">
                {softSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: '#e0f2f1',
                      color: '#00695c',
                      fontWeight: 600,
                      borderRadius: '20px',
                      px: 2,
                      py: 1,
                      boxShadow: 'inset 0 0 5px #b2dfdb',
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#80cbc4',
                        boxShadow: '0 4px 10px rgba(0, 105, 92, 0.3)',
                        color: '#004d40',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Extra Text */}
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  mt: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#4b5563',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                I’m passionate about constantly refining my skills and embracing the newest technologies and methodologies. 
                This dedication enables me to craft efficient, innovative, and scalable solutions that truly make a difference.
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
