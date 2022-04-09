import { Typography, Box, Button } from '@mui/material'

function Navigation() {
  const links = [
    {
      href: '/#home',
      name: 'About',
    },
    {
      href: '/#projects',
      name: 'Rates',
    },
    {
      href: '/#about',
      name: 'News & Events',
    },
    {
      href: '/#about',
      name: 'Gallery',
    },

    {
      href: '/#contact',
      name: 'Contact',
    },
  ]
  return (
    <Box
      component="nav"
      width="100%"
      pt={1.2}
      position="absolute"
      sx={{ boxShadow: 3 }}
    >
      <Button
        href="/"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'inline-block' },
        }}
      >
        <Box
          component="img"
          src="assets/silver-sneakers.jpg"
          sx={{ width: '100px' }}
        />
      </Button>
      <Button
        href="/"
        sx={{
          display: { md: 'none', left: '50%', transform: 'translateX(-50%)' },
        }}
      >
        <Box component="img" src="assets/logo.png" sx={{ width: '100px' }} />
      </Button>
      <Box
        sx={{
          float: 'right',
          display: { xs: 'none', sm: 'none', md: 'inherit' },
        }}
        py={2.2}
        mr={3}
      >
        {links.map((link) => (
          <Button
            key={link.name}
            href={link.href}
            sx={{ p: '.3rem 1.2rem !important' }}
          >
            {link.id && (
              <Typography variant="button" color="primary">
                {link.id}{' '}
              </Typography>
            )}

            {link.name}
          </Button>
        ))}
        <Button variant="outlined" sx={{ padding: '.3rem 1.2rem !important' }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}

export default Navigation
