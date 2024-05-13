import { Box, Chip, Modal } from "@mui/material";
import { useState } from "react";

const DetailMenuCard = (props)=>{
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
   }

   // variable declarations
   const { id, data, key, imgUrl, name, price, desc, type } = props
   const [menu, setMenu] = useState([])
   const [open, setOpen] = useState(false)
   const ingredientsCount = []
   const nonHalalIngredients = ['pork','lard','bacon','beef']
   let ingredientsValue = [], filteredIngredient = []

   // declare custom ingredients index (20 items)
   const ingredientsDeclaration = ()=>{
      for(let i=0; i<20; i++){
         ingredientsCount.push(`strIngredient${i+1}`)
      }
   }

   // handle fetch data from api (detail menu)
   const fetchData = async ()=>{
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ id ? id : 0 }`
      const data = await fetch(url)
      const dataJSON = await data.json()
      const dataMenu = dataJSON.meals
      setMenu(dataMenu)
      console.log(dataMenu)
   }

   // handle menu btn
   const handleOpen = () => {
      setOpen(true)
      console.log('opened',id)
      if(type==='food'){
         fetchData()
         ingredientsDeclaration()
      }
   }

   // dismis detail menu modal
   const handleClose = () => setOpen(false)

   // handle filter data (halal food)
   const handleFilterHalalIngredients = ()=> filteredIngredient = ingredientsValue && ingredientsValue.filter(i=>!nonHalalIngredients.includes(i.toLowerCase()))

   // save ingredients & filtered ingredients data
   const ingredients = menu && menu.map((data)=>{
      ingredientsDeclaration() //declare ingredients number
      ingredientsCount.map((i)=>{
         let newData = eval(`data.${i}`) //make data.__ executable/codeable
         if(newData){
            ingredientsValue.push(newData) //assign ingredient to an array
         }
      })
      handleFilterHalalIngredients() //run halal filter
      // return filteredIngredient
   })

   // data of ingredient (jsx display)
   const ingredient = filteredIngredient && filteredIngredient.map((i)=>{
      return i ? <Chip className="mb-1 me-1" label={ i } color="primary" size="small"/> : ''
   })

   return(
      <>
         <button onClick={handleOpen} className={`my-2 hover:bg-stone-100 hover:text-stone-800 hover:font-semibold transition ease-in-out size-full p-2 rounded-xl inline-block align-middle`}>
               <img key={key} src={imgUrl} className='mb-1 hover:size-32 transition ease-in-out shadow-black shadow-inner mx-auto size-16 rounded-md'/>
               <h2>{name}</h2>
               <p className={`${ type === 'food' ? 'bg-orange-600' : 'bg-slate-800'} rounded-md w-3/5 lg:w-36 m-auto text-xs lg:text-sm text-white`}>{price ? price : 'Rp. 30.000'}</p>
               {/* <p>{desc ? desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at.'}</p> */}
         </button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style} className='text-center bg-stone-100'>
               <img src={imgUrl} className='mb-2 shadow-black shadow-inner mx-auto max-h-80 rounded-md'/>
               <h3 className="mb-2 text-xl font-semibold">{ name }</h3>
               { ingredient ? ingredient : '' }
            </Box>
         </Modal>
      </>
   )
}
export default DetailMenuCard