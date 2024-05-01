const FilterButton = (props)=>{
   const { filterName, sendDataToParent } = props

   const handleFilter = (filterName)=>{
      console.log('filter btn clicked: '+filterName)
      sendDataToParent(filterName)
   }

   return(
      <>
         <button onClick={ ()=>handleFilter(filterName) } className='rounded-full bg-orange-500 size-16 mx-1 shadow-md'>
            <img src={`https://www.themealdb.com/images/category/${filterName}.png`} className='size-12 m-auto'/>
            <p className='-mt-4 text-white text-xs'>{ filterName ? filterName : 'menu' }</p>
         </button>
      </>
   )
}

export default FilterButton