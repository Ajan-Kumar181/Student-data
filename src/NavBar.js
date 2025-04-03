import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export function NavigatioBar() {
    const navigate = useNavigate();
    const navigatetohome = ()=>{
        navigate('/');
    } 
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            aria-label="Home"
            onClick={navigatetohome}
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a"  onClick={()=>{navigate('/studentList')}}>
            Student List
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a"  onClick={()=>{navigate('/addStudent')}}>
            Add Student
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" >
            Averages
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a">
            Averages
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}