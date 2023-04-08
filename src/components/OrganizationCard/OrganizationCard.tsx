import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  Box,
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField
} from '@mui/material'
import { useOrganizationStore } from '../../stores'
import { Organization } from '../../types'

const OrganizationCard = (props: Organization) => {
  const { orgName, tAssigned, pAssigned, tInuse, pInuse } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)

  const { remove } = useOrganizationStore()

  return (
    <>
      <Card sx={{ maxWidth: 500, flexWrap: 'wrap', flexShrink: 1 }}>
        <CardHeader
          avatar={<Avatar alt="Org1" src={`logo${props.logoNumber}.svg`} />}
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ fontWeight: 700 }}
          title={orgName}
        />
        <Divider sx={{ mr: 2, ml: 2 }} />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <Typography>Licenses</Typography>
            <Grid container justifyContent="space-between" gap={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  fontWeight: 100
                }}
              >
                <Typography>Tracking</Typography>
                <Box sx={{ display: 'flex', gap: 5 }}>
                  <div>Inuse:</div>
                  <div style={{ color: 'red' }}>{tInuse}</div>
                </Box>

                <Box
                  sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}
                >
                  <div>Assigned:</div>
                  <TextField
                    value={tAssigned}
                    sx={{ maxWidth: 60 }}
                    type="number"
                    variant="standard"
                  />
                  <Box />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  fontWeight: 100
                }}
              >
                <Typography>Protection</Typography>
                <Box sx={{ display: 'flex', gap: 5 }}>
                  <div>Inuse:</div>
                  <div style={{ color: 'green' }}>{pInuse}</div>
                </Box>

                <Box
                  sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}
                >
                  <div>Assigned:</div>
                  <TextField
                    value={pAssigned}
                    sx={{ maxWidth: 60 }}
                    type="number"
                    variant="standard"
                  />
                  <Box />
                </Box>
              </Box>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <MenuList>
                  <MenuItem onClick={() => remove(props.id)}>Remove</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default OrganizationCard
