import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
function Post() {
  return (
    <Card sx={{margin : 5}} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          SN
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert/>
        </IconButton>
      }
      title="Srikanth Narabathoju"
      subheader="February 15, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://www.cnet.com/a/img/resize/58b4427d5988522c975bbac22b807c73fd501af2/hub/2020/06/10/06f2b84a-2241-4567-a2a5-611ebb1e2650/gettyimages-1129377183.jpg?auto=webp&fit=crop&height=675&width=1200"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      New to coding? Start here and learn programming fundamentals that can be helpful for any language you learn.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color : ' red'}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton> 
    </CardActions>
  </Card>
  )
}

export default Post