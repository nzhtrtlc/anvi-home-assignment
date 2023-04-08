import { useState } from 'react'
import { Box, Button, Modal, TextField, TextFieldProps } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useOrganizationStore } from '../../stores'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 20,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2
}

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 3
}

const inputStyle = {
  gap: 2,
  display: 'flex'
}

const CTextField = (props: TextFieldProps) => (
  <TextField variant="outlined" InputLabelProps={{ shrink: true }} {...props} />
)

const AddOrganizationButton = () => {
  const [form, setForm] = useState<any>()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onInputChange = (event: any) => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const addOrg = useOrganizationStore(state => state.addOrg)

  const isMobile = useMediaQuery('(max-width:732px)')

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: isMobile ? 2 : '' }}
        onClick={handleOpen}
      >
        Add New Organization
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <Box sx={formStyle}>
            <CTextField
              name="orgName"
              label="Organization Name"
              onChange={onInputChange}
            />
            <Box sx={inputStyle}>
              <CTextField
                name="tAssigned"
                label="Tracking Assigned"
                type="number"
                onChange={onInputChange}
              />
              <CTextField
                name="tInuse"
                label="Tracking Inuse"
                type="number"
                onChange={onInputChange}
              />
            </Box>
            <Box sx={inputStyle}>
              <CTextField
                name="pAssigned"
                label="Protection Assigned"
                type="number"
                onChange={onInputChange}
              />
              <CTextField
                name="pInuse"
                label="Protection Inuse"
                type="number"
                onChange={onInputChange}
              />
            </Box>

            <Button
              variant="contained"
              sx={{ alignSelf: 'center' }}
              fullWidth
              onClick={() => {
                form.id = new Date().getTime()
                form.logoNumber = Math.floor(Math.random() * 5) + 1
                // get random number between 1-5 to get random svg logo inside public folder
                addOrg(form)
                setOpen(false)
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default AddOrganizationButton
