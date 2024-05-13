import { useState } from 'react'
import FilterButton from '../components/ui/FilterButton'
import MenuCard from '../components/ui/MenuCard'
import './Home.css'
import { Button } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

const Home = ()=>{

   let categories = [
      {
         id: 0,
         name: 'All Menus'
      },
      {
         id: 1,
         name: 'Beef'
      },
      {
         id: 2,
         name: 'Seafood'
      },
      {
         id: 3,
         name: 'Dessert'
      },
   ]

   const [filterName, setFilterName] = useState('')

   const handleDataFromChild = (data)=>{
      setFilterName(data)

   }

   const displayFoodsData = ()=>{
      return <MenuCard type='food' filterName={ filterName }/>
   }

   const displayDrinksData = ()=>{
      return <MenuCard type='drink' filterName={ filterName }/>
   }

   return(
      <div className='size-full bg-gradient-to-b from-orange-500 to-orange-700'>
         <div className='grid grid-cols-5 size-full my-0'>

            {/* left section */}
            <aside className='grid justify-items-center col-span-5 md:col-span-2 content-around my-5'>
               {/* top */}
               <div className='grid justify-items-center sr-only md:not-sr-only'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXX_k5HjUIVfetTW6KQVMgDsXcAaT26W2dhw&usqp=CAU' className='rounded-full size-28'/>
                  <h1 className='font-medium text-5xl sm:text-6xl xl:text-7xl mt-1'>Basit&apos;s</h1>
                  <h1 className='font-medium text-3xl sm:text-4xl xl:text-5xl text-white'>Restaurant</h1>
                  <h5 className='text-xs md:text-base xl:text-xl justify-self-end text-white rounded-full bg-black px-4 my-2'>Est.2024</h5>
               </div>

               {/* center */}
               <div className='mt-5'>
                  <h6 className='font-semibold md:text-lg text-center text-white italic antialiased pb-3'>Superfine Quality You Can Taste!</h6>
                  {
                     categories.map((category)=>{
                        return <FilterButton key={ category.id } filterName={ category.name } callback={ handleDataFromChild }/>
                     })
                  }
               </div>
               {/* <div className='text-white mt-5'>
                  <button className='me-1 bg-stone-800 px-5 py-2 rounded-md'>Foods <RestaurantIcon fontSize='small' /></button>
                  <button className='bg-stone-800 px-5 py-2 rounded-md'>Drinks <FreeBreakfastIcon fontSize='small' /></button>
               </div> */}
               {/* bottom */}
               <div className='hidden justify-items-center md:grid'>
                  <img src='https://img.pikbest.com/origin/09/25/12/87gpIkbEsTjwk.png!w700wp' className='size-64 lg:size-72 align-bottom rounded-xl shadow-2xl'/>
               </div>
            </aside>

            {/* right section */}
            <div className='col-span-5 md:col-span-3 text-center size-full overflow-hidden mb-1'>
               <div className='grid grid-cols-2 justify-items-center mb-1 size-full'>
                  {/* food menu */}
                  <div id='' className='overflow-hidden col-span-2 md:col-span-1 bg-stone-900 text-white size-full p-2'>
                     <h4 className='font-medium mb-2 text-sm md:text-lg'>Foods ({ filterName ? filterName : 'All Menus'})</h4>
                     <hr/>
                     <div id='makanan' className='grid justify-center text-sm md:text-base overflow-auto col-span-2 md:col-span-1 bg-stone-800 text-white size-full p-1 bg-contain bg-seafood'>
                        { displayFoodsData() }
                     </div>
                  </div>
                  {/* drink menu */}
                  <div id='' className='overflow-hidden col-span-2 md:col-span-1 bg-orange-600 text-white size-full p-2'>
                     <h4 className='font-medium mb-2 text-sm md:text-lg'>Drinks</h4>
                     <hr/>
                     <div id='minuman' className='text-sm md:text-base overflow-auto col-span-2 md:col-span-1 bg-orange-500 text-white size-full p-1 bg-contain bg-drinks'>
                        { displayDrinksData() }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home