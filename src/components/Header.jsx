import { Grid, Container, Typography, Button, Box } from '@mui/material'
import { Send } from '@mui/icons-material'

function Header({ email }) {
  const header = {
    background:
      'linear-gradient(black 3%, transparent 95%), url("assets/header3.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: ' no-repeat no-repeat',
    color: '#fff',
    paddingTop: '260px',
    paddingBottom: '300px',
    height: '100vh',
    textAlign: 'right',
  }

  return (
    <Box variant="header" style={header}>
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
          <Typography
            variant="h4"
            fontWeight={800}
            color="secondary"
            sx={{ display: 'inline' }}
          >
            Build{' '}
          </Typography>
          <Typography variant="h2" sx={{ display: 'inline' }}>
            Your Body
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h4"
            fontWeight={800}
            color="primary"
            sx={{ display: 'inline' }}
          >
            Transform{' '}
          </Typography>
          <Typography variant="h4" sx={{ display: 'inline' }}>
            Your Life
          </Typography>
        </Grid>
        <Grid>
          <Typography mt={1} fontWeight={600}>
            As a family owned fitness center, we are committed to providing the
            best
          </Typography>
          <Typography mt={1} fontWeight={600}>
            opportunity for personal growth in a fun, safe and healthy
            environment.
          </Typography>
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
    </Box>
  )
}

export default Header
