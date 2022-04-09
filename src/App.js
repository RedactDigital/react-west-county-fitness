import { Box } from '@mui/material'

import Header from './components/Header'
import Navigation from './components/Navigation'
import SectionOne from './components/SectionOne'

// https://fitnessfactorymaine.com/
// https://colorlib.com/wp/gym-websites-design/

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Box
        position="absolute"
        top="100vh"
        left={0}
        bgcolor="#0A192F"
        width="100%"
      >
        <SectionOne />
      </Box>
    </div>
  )
}

export default App
