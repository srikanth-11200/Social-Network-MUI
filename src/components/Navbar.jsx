import { styled } from '@mui/material/styles';
import { Mail, Mood, Notifications } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
  display : "flex",
  justifyContent : "space-between",
});

const Search = styled('div')(({theme}) => ({
  backgroundColor : "white",
  padding: "0 10px",
  borderRadius : theme.shape.borderRadius,
  width : "40%",
}));
const Icons = styled(Box)(({theme}) => ({
    display : 'none',
    gap : "20px",
    alignItems : "center",
    [theme.breakpoints.up("sm")]:{
      display : "flex"
    }
}));

const Userbox = styled(Box)(({theme}) => ({
   display: 'none',
   gap : "10px",
   alignItems : "center",
   [theme.breakpoints.down("sm")]:{
    display : 'flex'
   }
}));

function Navbar() {
  
  const [open,setOpen] = useState(false);
  
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{
          display : {xs : "none" , sm : "block"}}}>SN</Typography>
        <Mood sx={{display : {xs:"block" , sm: "none"}}}></Mood>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={2} color="error">
        <Notifications />
        </Badge>
        <Avatar 
        onClick = {e => setOpen(true)}
        src='' sx={{width:30,height:30}}/>
        </Icons>
        <Userbox onClick={e => {setOpen(true)}}>
        <Avatar src='' sx={{width:30,height:30}}/>
        <Typography>Srikanth</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> {setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar