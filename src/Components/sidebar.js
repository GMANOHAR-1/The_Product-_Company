import * as React from 'react';
 import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
 
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
 
  

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {

     

    
    const drawer = (
        <div>
             
         
            <List style={{ backgroundColor: 'rgb(39, 24, 124)', color: "white" }}>
                {['DashBoard', 'Manage Subscription', 'Young Brain', 'Mid Career', 'vendor', 'consultant', 'report', 'signup'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon style={{ color: "white" }}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} style={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );


    return (
        <Box sx={{ display: 'flex',position:'relative',top:'0px' }}>
            <CssBaseline />

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        
    );
}
