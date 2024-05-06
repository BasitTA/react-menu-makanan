import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const DetailMenuCard = (props)=>{
   const { key, imgUrl, name, price, desc, type } = props

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70vw',
      // bgcolor: 'background.paper',
      borderRadius: '5px',
      boxShadow: 24,
      p: 4,
   };

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return(
      <>
         <button onClick={handleOpen} className={`hover:bg-stone-100 hover:text-stone-800 hover:font-semibold transition ease-in-out size-full p-2 rounded-xl inline-block align-middle`}>
               <img key={key} src={imgUrl} className='mb-1 hover:size-32 transition ease-in-out shadow-black shadow-inner mx-auto size-16 rounded-md'/>
               <h2>{name}</h2>
               {/* <p>{price ? price : 'Rp. 30000'}</p>
               <p>{desc ? desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at.'}</p> */}
         </button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style} className='text-center bg-stone-100'>
               <img src={imgUrl} className='mb-2 shadow-black shadow-inner mx-auto max-h-80 rounded-md'/>
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