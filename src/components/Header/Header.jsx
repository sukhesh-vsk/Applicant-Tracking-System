import { KeyboardArrowDown } from '@mui/icons-material';
import { List, ListDivider, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { Grid, Popper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ToggleTheme from './ToggleTheme';
import './Header.css'

function Header() {
    const customStyles = {
        user: {
            display: 'flex',
            // minHeight: 190,
        },
        container: {
            margin: '0px',
            // padding: '10px',
        },
    };

    const UserIcon = () => {
        const navigate = useNavigate();
        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        };
        
        const logout = () => {
            navigate('/')
        }

        const open = Boolean(anchorEl);
        const id = open ? 'user-popper' : undefined;

        return (
            <div>
                <ListItemButton
                    aria-haspopup
                    aria-expanded={open ? 'true' : 'false'}
                    role="menuitem"
                    onClick={handleClick}
                    className='header__user__dropdown'
                >
                    User <KeyboardArrowDown />
                </ListItemButton>
                <Popper open={open} anchorEl={anchorEl} id={id} disablePortal keepMounted style={{zIndex: 99, backgroundColor: 'white'}}>
                    <List
                        role="menu"
                        aria-label="user"
                        variant="outlined"
                        sx={{
                        my: 2,
                        zIndex: 99,
                        boxShadow: 'md',
                        borderRadius: 'sm',
                        minWidth: 180,
                        '--List-radius': '8px',
                        '--List-padding': '4px',
                        '--ListDivider-gap': '4px',
                        }}
                    >
                        <ListItem role='none' style={{zIndex: 99}}>
                            <ListItemButton role="menuitem">
                                <ListItemContent>User Profile</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListDivider />
                        <ListItem role='none'>
                            <ListItemButton role="menuitem">
                                <ListItemContent>Settings</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListItem role='none'>
                            <ListItemButton role="menuitem" onClick={logout}>
                                <ListItemContent>LogOut</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Popper>
            </div>
        );
    };

    return (
        <div style={{ margin: '0px 20px' }}>
            <Grid container sx={customStyles.container} className='main__header'>
                <Grid item xs className='header__logo'>
                    <h2>Todo Hub</h2>
                </Grid>
                <Grid item sx={customStyles.user}>
                    <List
                        role='menubar'
                        orientation='horizontal'
                        sx={{
                            '--List-radius': '8px',
                            '--List-padding': '4px',
                            '--List-gap': '8px',
                            '--ListItem-gap': '0px',
                        }}
                    >
                        {/* <ListItem role='none'>
                            <h3>SWITCH</h3>
                            <ToggleTheme />
                        </ListItem> */}
                        <ListItem role='none'>
                            <UserIcon />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
