import { Grid, Button, Box, Typography } from '@mui/material'

function SectionOnce() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={4} textAlign="center" bgcolor="black">
          <Typography variant="h4" color="secondary">
            Weight Training
          </Typography>
          <Typography color="secondary">
            From bodybuilding to powerlifting and everything in between, the
            Fitness Factory has the equipment to help you reach your goals. With
            dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2
            competition benches, and a variety of plate loaded and pin loaded
            machines, we have everything you need.
          </Typography>
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="secondary">
            General Fitness
          </Typography>
          <Typography color="secondary">
            If your goals are to improve your overall health and wellness, we
            have everything you need. We have cardio equipment spanning two
            floors including 8 stepmills, 15+ treadmills, row machines, exercise
            bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s
            Ladder. In addition to cardio equipment, we have stretching areas
            with mats, foam rollers, bands, light weights, and much more.
          </Typography>
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="secondary">
            Functional Training
          </Typography>
          <Typography color="secondary">
            With 60 feet of turf with a sled, stackable plyometric boxes,
            weighted medicine balls, battle ropes, squat racks, and deadlift
            platforms our functional training room has all the equipment you
            need to take your training to the next level.
          </Typography>
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionOnce
