import { Box, Modal, Typography, Button } from "@mui/material";
import { useState } from "react";

const DetailMenuCard = (props)=>{
   const { key, imgUrl, name, price, desc } = props

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
   };

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return(
      <>
         <button onClick={handleOpen}>
               <img key={key} src={imgUrl} className='mx-auto size-16 rounded-md'/>
               <h2>{name}</h2>
               {/* <p>{price ? price : 'Rp. 30000'}</p>
               <p>{desc ? desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at.'}</p> */}
               <br/>
         </button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  { name }
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
               </Typography>
            </Box>
         </Modal>
      </>
   )
}
export default DetailMenuCard