import { Grid, Container, Typography, Button, Box } from '@mui/material'
import { Send } from '@mui/icons-material'

function Header({ email }) {
  const header = {
    background:
      'linear-gradient(black 5%, transparent 95%), url("assets/header.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: ' no-repeat',
    color: '#fff',
    paddingTop: '260px',
    paddingBottom: '300px',
    height: '100vh',
  }

  return (
    <header style={header}>
      <Container maxWidth="lg">
        <Grid>
          <Typography variant="h2" fontWeight={600}>
            West{' '}
            <Box
              variant="span"
              sx={{ color: 'primary.main', display: 'inline-block' }}
            >
              County
            </Box>{' '}
            Fitness
          </Typography>
          <Typography variant="h1" fontWeight={500}>
            24 Hour{' '}
            <Box
              variant="span"
              sx={{ color: 'primary.main', display: 'inline-block' }}
            >
              Gym
            </Box>
          </Typography>
        </Grid>
        <Grid marginTop={4}>
          <Typography variant="h4">Decide, Commit, Succeed</Typography>
        </Grid>
        <Grid marginTop={4}>
          <Button
            startIcon={<Send />}
            variant="outlined"
            href={`mailto:${email}`}
          >
            Start Your Free Trial
          </Button>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
