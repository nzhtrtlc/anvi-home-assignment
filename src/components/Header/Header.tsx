import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddOrganizationButton from './AddOrganizationButton'
import { useOrganizationStore } from '../../stores'
import useMediaQuery from '@mui/material/useMediaQuery'

const Header = () => {
  const { filter, setIsFiltering, orgs } = useOrganizationStore()
  const onSearch = (e: { target: { value: string } }) => {
    const {
      target: { value }
    } = e
    setIsFiltering(value.length > 0)
    filter(value)
  }

  const searchBarWidthLimit = useMediaQuery('(max-width:525px)')
  return (
    <Grid container justifyContent="space-between">
      <Box
        sx={{
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}
      >
        <Typography fontWeight={700}>
          All organizations {orgs ? `(${orgs.length})` : '(0)'}
        </Typography>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          InputLabelProps={{ shrink: searchBarWidthLimit }}
          label={searchBarWidthLimit ? 'Search organization' : undefined}
          placeholder={!searchBarWidthLimit ? 'Search organization' : undefined}
          variant="outlined"
          type="search"
          size="small"
          onChange={onSearch}
        />
      </Box>
      <AddOrganizationButton />
    </Grid>
  )
}

export default Header
