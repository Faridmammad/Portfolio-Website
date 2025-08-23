import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} onClick={() => scrollToSection(item.href)}>
            <ListItemText 
              primary={item.name} 
              sx={{ textAlign: 'center', cursor: 'pointer' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}
        className="border-b border-gray-100"
      >
        <Toolbar className="container-max">
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                sx={{ 
                  color: 'text.primary',
                  '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.1)' }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
  color="primary"
  aria-label="open drawer"
  edge="end"
  onClick={handleDrawerToggle}
  sx={{ display: { md: 'none' } }}
>
  <MenuIcon />
</IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Spacer for fixed header */}
      <Toolbar />
    </>
  );
};

export default Header;
