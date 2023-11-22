import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(
    {
        notifications
    }
) {
    const [dense, setDense] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);    
    
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="Mostrar fecha"
                />
            </FormGroup>

            <Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Últimas notificaciones
                    </Typography>
                    <Demo>
                        <List dense={dense}>

                            {notifications.map(notification => (
                                <ListItem key={notification.notifId}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="read">
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
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Variable: {notification.variable}
                                                </Typography>
                                                <Typography
                                                    sx={{ display: 'block' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Tipo: {notification.type}
                                                </Typography>
                                                <Typography
                                                    sx={{ display: 'block' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Cultivo: {notification.notifcropAsoc}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={secondary ? (
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {notification.time}
                                                </Typography>
                                                {" — " + notification.date}
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
    );
}
