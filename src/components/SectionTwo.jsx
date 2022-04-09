import { Box, Typography, Button, Grid, TextField } from '@mui/material'

function SectionOnce() {
  return (
    <Box
      height="40vh"
      sx={{
        background:
          'linear-gradient(rgb(0,0,0,.5),rgb(0,0,0,.5)), url("assets/header2.jpg")',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        backgroundRepeat: ' no-repeat no-repeat',
      }}
    >
      <Grid container>
        <Grid item sm={12} md={2}></Grid>
        <Grid item sm={12} md={4} mt={8}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              required
              label="Email:"
              variant="filled"
              sx={{
                input: { color: '#fff' },
                label: { color: '#fff' },
                borderRadius: '5px',
                border: '1px solid #fff',
              }}
            />
            <TextField
              multiline
              required
              label="Message:"
              variant="filled"
              sx={{
                input: { color: '#fff' },
                label: { color: '#fff' },
                color: '#fff',
                borderRadius: '5px',
                border: '1px solid #fff',
              }}
            />
            <Box variant="div" sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item textTransform="uppercase" sm={12} md={4} mt={8}>
          <Typography variant="h4" color="#fff" display="inline">
            Your{' '}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            color="primary"
            display="inline"
          >
            fitness
          </Typography>
          <Typography variant="h4" color="#fff" display="inline">
            {' '}
            starts here
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionOnce
