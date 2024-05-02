const FilterButton = (props)=>{
   const { filterName, sendDataToParent } = props
   let categoryImage = ''

   if(filterName==='All Menus'){
      categoryImage = <img src='https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg' className='rounded-full size-12 m-auto'/>
   }else{
      categoryImage = <img src={`https://www.themealdb.com/images/category/${filterName}.png`} className='size-12 m-auto'/>
   }

   const handleFilter = (filterName)=>{
      console.log('filter btn clicked: '+filterName)
      sendDataToParent(filterName)
   }

   return(
      <>
         <button onClick={ ()=>handleFilter(filterName) } className='rounded-full bg-orange-500 size-16 mx-1 shadow-md'>
            { categoryImage }
            <p className='-mt-4 text-white text-xs'>{ filterName ? filterName : 'menu' }</p>
         </button>
      </>
   )
}

export default FilterButton