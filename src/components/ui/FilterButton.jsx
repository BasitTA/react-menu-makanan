import { useState } from "react"

const FilterButton = (props)=>{
   const { filterName, callback } = props
   let categoryImage = ''

   // set filter btn img
   if(filterName==='All Menus'){
      categoryImage = <img src='https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg' className='rounded-full size-12 m-auto'/>
   }else{
      categoryImage = <img src={`https://www.themealdb.com/images/category/${filterName}.png`} className='size-12 m-auto'/>
   }

   // handle filter (sending filter name to parent)
   const handleFilterBtn = (filterName)=>{
      // console.log('filter btn clicked: '+filterName)
      callback(filterName)
   }

   return(
      <>
         <button onClick={ ()=>handleFilterBtn(filterName) } className={`hover:bg-orange-300 transition duration-700 ease-in-out rounded-full bg-orange-500 size-16 mx-1 shadow-md`}>
            { categoryImage }
            <p className='-mt-4 text-white text-xs'>{ filterName ? filterName : 'menu' }</p>
         </button>
      </>
   )
}

export default FilterButton