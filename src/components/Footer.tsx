import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Grid
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  X, 
  Email,
  ArrowUpward
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/faridmammad',
      color: '#333'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/faridmammad',
      color: '#0077b5'
    },
    {
      icon: <X />,
      label: 'X',
      url: 'https://x.com/faridmammad',
      color: '#1da1f2'
    },
    {
      icon: <Email />,
      label: 'Email',
      url: 'mailto:contact@faridmammad.com',
      color: '#ea4335'
    }
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Main Footer Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid> {/* <-- Burada bağlanış teqi əlavə edildi */}

        <Divider sx={{ my: 4, borderColor: 'grey.700' }} />

        {/* Bottom Footer */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="body2" sx={{ color: 'grey.400', textAlign: { xs: 'center', sm: 'left' } }}>
              © {new Date().getFullYear()} Farid Mammad. All rights reserved.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                color: 'white',
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowUpward />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;