import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate } from 'react-router-dom';

const Sidebar = ()=> {

    const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

<List>
  <ListItem disablePadding>

        <ListItemButton onClick={()=>navigate("/")}>
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
        </ListItemButton>

    </ ListItem>

    <ListItem disablePadding>

<ListItemButton onClick={()=>navigate("/searchpost")}>
    <ListItemIcon>
    <SearchIcon/>
    </ListItemIcon>
    <ListItemText primary={"Explore"} />
</ListItemButton>

</ ListItem>


<ListItem disablePadding>

<ListItemButton onClick={()=>navigate("/msg")}>
    <ListItemIcon>
    <MessageIcon/>
    </ListItemIcon>
    <ListItemText primary={"Message"} />
</ListItemButton>

</ ListItem>


<ListItem disablePadding>

<ListItemButton onClick={()=>navigate("/postbookmark")}>
    <ListItemIcon>
    <BookmarkBorderIcon />
    </ListItemIcon>
    <ListItemText primary={"Bookmark"} />
</ListItemButton>

</ ListItem>

<Divider />
<ListItem disablePadding>

<ListItemButton onClick={()=>navigate("/profile")}>
    <ListItemIcon>
    <AccountCircleIcon  />
    </ListItemIcon>
    <ListItemText primary={"Profile"} />
</ListItemButton>

</ ListItem>

<Divider />




 </List>


      {/* <Divider /> */}

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}

      <React.Fragment>

        <MenuIcon 
          onClick={
            toggleDrawer("left",true)
          }
        />

<Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
      </React.Fragment>


    </div>
  );
}

export default Sidebar;