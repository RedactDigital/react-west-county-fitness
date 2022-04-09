import { Grid, Box, Typography, Button } from '@mui/material'

function SectionOnce() {
  return (
    <Box bgcolor="#fff" textAlign="center" py={8}>
      <Grid container>
        <Grid item xs={12} md={12} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box
            component="img"
            src="assets/weights.jpg"
            sx={{ width: '75%' }}
            alt="kids"
            position="relative"
          />
          <Typography variant="h4" color="primary" fontWeight={600} mt={2}>
            Weight Training
          </Typography>
          <Typography px={8} mt={1}>
            From bodybuilding to powerlifting and everything in between, we have
            the equipment to help you reach your goals.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box
            component="img"
            src="assets/cardio.jpg"
            sx={{ width: '75%' }}
            position="relative"
          />
          <Typography variant="h4" color="primary" fontWeight={600} mt={2}>
            Functional Training
          </Typography>
          <Typography px={8} mt={1}>
            Our cardio equipment includes treadmills, ellipticals, row machines,
            exercise bikes, and more. In addition to cardio equipment, we have
            stretching areas with mats, foam rollers, bands, light weights, and
            much more.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={4} mt={8}>
          <Box variant="div">
            <Box
              component="img"
              src="assets/class.jpg"
              sx={{ width: '75%' }}
              alt="kids"
              position="relative"
            />
            <Box variant="span" fontWeight={600} fontSize=".6rem">
              Photo by Geert Pieters
            </Box>
            <Typography variant="h4" color="primary" fontWeight={600} mt={2}>
              Group Classes
            </Typography>
            <Typography px={8} mt={1}>
              West County Fitness offers a variety of group classes for all ages
              to help you condition your body and build confidence in all areas
              of your life.
            </Typography>
            <Button
              sx={{
                color: '#217CB9 !important',
                fontWeight: '600',
              }}
            >
              View All Classes
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4} mt={8}>
          <Box variant="div">
            <Box
              component="img"
              src="assets/kids.jpg"
              sx={{ width: '75%' }}
              alt="kids"
              position="relative"
            />
            <Box variant="span" fontWeight={600} fontSize=".6rem">
              Photo by Sigmund
            </Box>
            <Typography variant="h4" color="primary" fontWeight={600} mt={2}>
              Child Care
            </Typography>
            <Typography px={8} mt={1}>
              Enjoy your workout while your kids are having fun!
            </Typography>
            <Typography mt={1} fontWeight={600}>
              For kids age 3 months and older
            </Typography>
            <Button
              sx={{
                color: '#217CB9 !important',
                fontWeight: '600',
              }}
            >
              View All Requirements
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionOnce
