import { BookmarkAdd } from '@mui/icons-material';
import { IconButton, List, ListDivider, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { Grid, Popper } from '@mui/material';
import React from 'react';

function Header() {
  const customStyles = {
    user: {
      display: 'flex',
    },
    container: {
      margin: '0px',
      // padding: '10px',
    },
  };

  const UserIcon = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'user-popper' : undefined;

    return (
      <div>
        <ListItemButton
          aria-haspopup
          aria-expanded={open ? 'true' : 'false'}
          role="menuitem"
          onClick={handleClick}
        >
          User
        </ListItemButton>
        <Popper open={open} anchorEl={anchorEl} id={id}>
          <ListItem role='none'>
            <ListItemButton role="menuitem">
              <ListItemContent>User</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role='none'>
            <ListItemButton role="menuitem">
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem role='none'
            endAction={     
                <IconButton variant="outlined" color="neutral" size="sm">
                  <BookmarkAdd />
                </IconButton>
            }
          >
            <ListItemButton role="menuitem">
              <ListItemContent>LogOut</ListItemContent>
            </ListItemButton>
          </ListItem>
        </Popper>
      </div>
    );
  };

  return (
    <div sx={{ margin: '0px' }}>
      <Grid container sx={customStyles.container}>
        <Grid item xs>
          <h2>Logo</h2>
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
            <ListItem>
              <h2>Theme Set</h2>
            </ListItem>
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
