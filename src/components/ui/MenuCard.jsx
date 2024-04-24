import DetailMenuCard from "./DetailMenuCard"
import { useEffect, useState } from "react"

const MenuCard = (props)=>{
   const { type } = props
   const drinks = [
      {
         'idMeal':'1',
         'strMeal':'Mineral Water',
         'strMealThumb':'https://sesa.id/cdn/shop/products/natural-mineral-water-equil-760-ml-_1__2_1.jpg?v=1675744639'
      },
      {
         'idMeal':'2',
         'strMeal':'Mineral Water',
         'strMealThumb':'https://sesa.id/cdn/shop/products/natural-mineral-water-equil-760-ml-_1__2_1.jpg?v=1675744639'
      },
   ]

   const [menus, setMenus] = useState([])
   const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'

   useEffect(()=>{
      const fetchData = async ()=>{
            const data = await fetch(beefURL)
            const dataJson = await data.json()
            setMenus(dataJson.meals)
      }
      fetchData()
   },[])

   const generateMenu = (type)=>{
      switch(type){
         case 'food':
            // return 'lll'
            menus.map((menu)=>{
               return <DetailMenuCard key={menu.id} name={menu.strMeal} imgUrl={menu.strMealThumb}/>
            });
            break;
         case 'drink':
            drinks.map((drink)=>{
               return <DetailMenuCard key={drink.idMeal} name={drink.strMeal} imgUrl={drink.strMealThumb}/>
            });
            break;
         default:
            // return <DetailMenuCard/>;
            return <p>hjgk</p>;
      }
   }

   return(
      <>
         <hr/>
         <div className='grid justify-items-center my-10'>
               {
                  generateMenu(type)
               }
               {/* {
                  menus.map((menu)=>{
                     return <DetailMenuCard key={menu.id} name={menu.strMeal} imgUrl={menu.strMealThumb}/>
                  })
               } */}
         </div>
      </>
   )
}

export default MenuCard