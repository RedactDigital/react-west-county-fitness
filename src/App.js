import { Box } from '@mui/material'
import Header from './components/Header'
import Navigation from './components/Navigation'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'

// https://fitnessfactorymaine.com/
// https://colorlib.com/wp/gym-websites-design/

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Box position="absolute" top="100vh" left="0" right="0" bottom="0">
        <SectionOne />
        <SectionTwo />
      </Box>
    </div>
  )
}

export default App
