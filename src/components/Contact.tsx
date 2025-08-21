import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { sendEmail } from '../lib/emailService'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const [loading, setLoading] = useState(false); // göndərmə statusu

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    sendEmail(formData)
      .then(() => {
        setSnackbar({
          open: true,
          message: 'Thank you for your message! I’ll get back to you soon.',
          severity: 'success',
        });
        // Formu sıfırla
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again.',
          severity: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      content: 'contact@faridmammad.com',
      link: 'mailto:contact@faridmammad.com',
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Phone',
      content: '+48 571 453 888',
      link: 'tel:+48571453888',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Location',
      content: 'Cracow, Poland',
      link: '#',
    },
  ];

  return (
    <Box component="section" id="contact" sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
                Let's Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{info.icon}</Box>
                      <Typography variant="h6" component="h4" gutterBottom>
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        component="a"
                        href={info.link}
                        sx={{
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
                  Send a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
  required
  fullWidth
  label="Message"
  multiline
  rows={6}
  name="message"           // ✅ Əlavə olundu
  value={formData.message}
  onChange={handleInputChange}
  variant="outlined"
/>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;