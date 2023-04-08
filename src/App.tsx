import { Box, Container, Divider, Grid, Paper } from '@mui/material'
import { Header } from './components/Header'
import { useOrganizationStore } from './stores'
import { OrganizationCard } from './components/OrganizationCard'
import { Organization } from './types'

function App() {
  const { orgs, filtered, isFiltering } = useOrganizationStore()
  const dataToRender = isFiltering ? filtered : orgs
  return (
    <Container maxWidth="xl">
      <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Header />
          <Divider />
          <Grid container spacing={2}>
            {dataToRender?.map((org: Organization) => (
              <Grid key={org.id || org.orgName} item xs={12} md={6} lg={4}>
                <OrganizationCard {...org} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default App
