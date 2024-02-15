import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import styled from '@emotion/styled';
function Adds() {

    const [open, setOpen] = useState(false);

    const Userbox = styled(Box)({
        display: 'flex',
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    });
    return (
        <>
            <Tooltip onClick={e => { setOpen(true) }}
                title="Delete" sx={{
                    position: "fixed", bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <Modal sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                open={open}
                onClose={e => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <Userbox >
                        <Avatar src='https://4.bp.blogspot.com/-5Josi4tSD1U/WgnOaYcjplI/AAAAAAAAlmU/GT9v1p_qtbY3771j9-f5nJKOHg_4OKt5QCPcBGAYYCw/s1600/prabhas%2Bphotos%2B4.jpg'
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>Srikanth</Typography>
                    </Userbox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    )
}

export default Adds;