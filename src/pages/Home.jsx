import { useState } from 'react'
import FilterButton from '../components/ui/FilterButton'
import MenuCard from '../components/ui/MenuCard'
import './Home.css'

const Home = ()=>{

   let categories = [
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

   const [dataFromChild, setDataFromChild] = useState('')

   const handleDataFromChild = (data)=>{
      setDataFromChild(data)
   }


   return(
      <div className='size-full bg-gradient-to-b from-orange-500 to-orange-700'>
         <div className='grid grid-cols-5 size-full my-0'>
            {/* left section */}
            <aside className='grid justify-items-center col-span-5 md:col-span-2 content-around mb-1'>
               {/* top */}
               <div className='grid justify-items-center '>
                  <h1>{dataFromChild}</h1>

                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXX_k5HjUIVfetTW6KQVMgDsXcAaT26W2dhw&usqp=CAU' className='rounded-full bg-transparent size-28'/>
                  <h1 className='text-8xl'>Basit&apos;s</h1>
                  <h1 className='text-6xl text-white'>Restaurant</h1>
                  <h5 className='justify-self-end text-white rounded-full bg-black px-4 mt-1'>Est.2024</h5>
               </div>
               {/* center */}
               <div className=''>
                  <h3 className='text-center text-xl mb-2'>Pilih Kategori Makananmu</h3>
                  {
                     categories.map((category)=>{
                        return <FilterButton key={ category.id } filterName={ category.name } sendDataToParent={handleDataFromChild}/>
                     })
                  }
               </div>
               {/* bottom */}
               <div className='hidden justify-items-center md:grid'>
                  <img src='https://img.pikbest.com/origin/09/25/12/87gpIkbEsTjwk.png!w700wp' className='size-72 align-bottom rounded-xl shadow-2xl'/>
               </div>
            </aside>

            {/* right section */}
            <div className='col-span-5 md:col-span-3 text-center size-full overflow-hidden mb-1'>
               <div className='grid grid-cols-2 justify-items-center mb-1 size-full'>
                  {/* food menu */}
                  <div id='makanan' className='overflow-auto col-span-2 md:col-span-1 bg-stone-900 text-white size-full p-2'>
                     <h4>Makanan</h4>
                     <MenuCard type='food' filterName={dataFromChild}/>
                  </div>
                  {/* drink menu */}
                  <div id='minuman' className='overflow-auto col-span-2 md:col-span-1 bg-orange-600 text-white size-full p-2'>
                     <h4>Minuman</h4>
                     <MenuCard type='drink'/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home