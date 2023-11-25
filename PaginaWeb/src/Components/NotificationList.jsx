import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))

export default function InteractiveList () {
  const [dense, setDense] = React.useState(true)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', width: '300px' }} >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0px' }}>
        <h3 style={{ borderRadius: '20px', color: 'rgb(74, 74, 74)' }} > Notificaciones </h3>
        <Link to='/' >
          <FontAwesomeIcon style={{ color: 'rgb(74, 74, 74)', height: '20px' }} icon={faXmark} />
        </Link>
      </div>
      <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
          <FormGroup row>
              <FormControlLabel
                  control={
                      <Checkbox
                          checked={secondary}
                          onChange={(event) => setSecondary(event.target.checked)}
                      />
                  }
                  label='Mostrar fecha'
              />
          </FormGroup>

          <Grid>

              <Grid item xs={12} md={6}>
                  <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
                      Últimas notificaciones
                  </Typography>
                  <Demo>
                      <List dense={dense}>

                          {notifications.map(notification => (
                              <ListItem key={notification.notifId}
                                  secondaryAction={
                                      <IconButton edge='end' aria-label='read'>
                                          <CheckCircleIcon />
                                      </IconButton>
                                  }>
                                  <ListItemIcon>
                                      <WarningAmberIcon></WarningAmberIcon>
                                  </ListItemIcon>
                                  <ListItemText
                                      primary={
                                          <React.Fragment>
                                              <Typography
                                                  sx={{ display: 'block' }}
                                                  component='span'
                                                  variant='body2'
                                                  color='text.primary'
                                              >
                                                  Variable: {notification.variable}
                                              </Typography>
                                              <Typography
                                                  sx={{ display: 'block' }}
                                                  component='span'
                                                  variant='body2'
                                                  color='text.primary'
                                              >
                                                  Tipo: {notification.type}
                                              </Typography>
                                              <Typography
                                                  sx={{ display: 'block' }}
                                                  component='span'
                                                  variant='body2'
                                                  color='text.primary'
                                              >
                                                  Cultivo: {notification.notifcropAsoc}
                                              </Typography>
                                          </React.Fragment>
                                      }
                                      secondary= { secondary ? (
                                          <React.Fragment>
                                              <Typography
                                                  sx={{ display: 'inline' }}
                                                  component='span'
                                                  variant='body2'
                                                  color='text.primary'
                                              >
                                                  {notification.time}
                                              </Typography>
                                              {' — ' + notification.date}
                                          </React.Fragment>)
                                        : null}
                                  />
                              </ListItem>
                          ))

                          }
                      </List>
                  </Demo>
              </Grid>
          </Grid>
      </Box>
    </div>
  )
}

const notifications = [
  {
    notifId: 1,
    notifDeviceID: 1,
    notifDeviceName: 'Café 1',
    date: '21/11/2023',
    time: '12:30 pm',
    notifcropAsoc: 'Café',
    variable: 'Temperatura',
    type: 'Alto',
    state: false
  },
  {
    notifId: 2,
    notifDeviceID: 1,
    notifDeviceName: 'Café 1',
    date: '21/11/2023',
    time: '12:55 pm',
    notifcropAsoc: 'Café',
    variable: 'Temperatura',
    type: 'Alto',
    state: false
  },
  {
    notifId: 3,
    notifDeviceID: 1,
    notifDeviceName: 'Café 1',
    date: '21/11/2023',
    time: '12:55 pm',
    notifcropAsoc: 'Café',
    variable: 'Lluvias',
    type: 'Bajo',
    state: false
  }
]
