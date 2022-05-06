import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Card = ({ name, email, id }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let img = `https://robohash.org/${id}`;

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={img} alt="Robot" onClick={handleOpen} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Robot"
                aria-describedby="Robot"
            >
                <Box className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
                    style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Typography>
                        <h2>{name}</h2>
                    </Typography>
                    <img src={img} alt="robot" style={{ width: 'auto', height: '500px' }} />

                </Box>
            </Modal>
        </div>
    )
}

export default Card;