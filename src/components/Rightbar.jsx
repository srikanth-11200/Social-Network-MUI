import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box flex={2} p={2}
      sx={{
        display: { xs: "none", sm: "block" }
      }}>
      <Box position="fixed" width={430}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://www.dell.com/wp-uploads/2022/11/Human-like-Avatar-3-640x480.jpg" />
          <Avatar alt="Travis Howard" src="https://4.bp.blogspot.com/-5Josi4tSD1U/WgnOaYcjplI/AAAAAAAAlmU/GT9v1p_qtbY3771j9-f5nJKOHg_4OKt5QCPcBGAYYCw/s1600/prabhas%2Bphotos%2B4.jpg" />
          <Avatar alt="Cindy Baker" src="https://tse4.mm.bing.net/th?id=OIP.ExetI72XG3vM33Uh4uTSHgHaE8&pid=Api&P=0&h=180" />
          <Avatar alt="Agnes Walker" src="https://filmfare.wwmindia.com/content/2021/jan/maheshbabu31611209646.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.v9gwegsSkEnOw0ZZOT7b0AHaHa&pid=Api&P=0&h=180" />
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.v9gwegsSkEnOw0ZZOT7b0AHaHa&pid=Api&P=0&h=180" />
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.v9gwegsSkEnOw0ZZOT7b0AHaHa&pid=Api&P=0&h=180" />
          <Avatar alt="Travis Howard" src="https://www.dell.com/wp-uploads/2022/11/Human-like-Avatar-3-640x480.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
           <ImageListItem>
          <img src='https://tse3.mm.bing.net/th?id=OIP.W5A88VvmwibfNW2EqDynwwHaE0&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
           <ImageListItem>
          <img src='https://tse2.mm.bing.net/th?id=OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
           <ImageListItem>
          <img src='https://tse4.mm.bing.net/th?id=OIP.Jmg8k0E-E_Zy1dSj_tjYjgHaE8&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
           <ImageListItem>
          <img src='https://tse3.mm.bing.net/th?id=OIP.ufPXePYtW4p1ECVkO61vLQHaEK&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
           <ImageListItem>
          <img src='https://tse2.mm.bing.net/th?id=OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
           <ImageListItem>
          <img src='https://tse3.mm.bing.net/th?id=OIP.W5A88VvmwibfNW2EqDynwwHaE0&pid=Api&P=0&h=180'
            alt=''
          />
           </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://4.bp.blogspot.com/-5Josi4tSD1U/WgnOaYcjplI/AAAAAAAAlmU/GT9v1p_qtbY3771j9-f5nJKOHg_4OKt5QCPcBGAYYCw/s1600/prabhas%2Bphotos%2B4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Prabhas
              </Typography>
              {" — I'll be in your neighborhood doing photo clicks this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Anjali, Shruthi, Urmila
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://tse4.mm.bing.net/th?id=OIP.ExetI72XG3vM33Uh4uTSHgHaE8&pid=Api&P=0&h=180" />
        </ListItemAvatar>
        <ListItemText
          primary="Hurray!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                N.Srinivasa
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar