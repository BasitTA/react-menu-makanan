import DetailMenuCard from "./DetailMenuCard"
import { useEffect, useState } from "react"

const MenuCard = (props)=>{
   const { type, filterName } = props
   const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'
   const seafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'
   const dessertURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert'
   const drinks = [
      {
         "idMeal": "1",
         "strMeal": "Mineral Water",
         "strMealThumb": "https://sesa.id/cdn/shop/products/natural-mineral-water-equil-760-ml-_1__2_1.jpg?v=1675744639"
       },
       {
         "idMeal": "2",
         "strMeal": "Americano",
         "strMealThumb": "https://images.pexels.com/photos/21855778/pexels-photo-21855778/free-photo-of-coffee-in-cup-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       },
       {
         "idMeal": "3",
         "strMeal": "Latte",
         "strMealThumb": "https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg"
       },
       {
         "idMeal": "4",
         "strMeal": "Matcha Latte",
         "strMealThumb": "https://images.pexels.com/photos/14704657/pexels-photo-14704657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       },
       {
         "idMeal": "5",
         "strMeal": "Mango Juice",
         "strMealThumb": "https://images.pexels.com/photos/5817621/pexels-photo-5817621.jpeg?auto=compress&cs=tinysrgb&w=800"
       },
       {
         "idMeal": "6",
         "strMeal": "Strawberry Smoothie",
         "strMealThumb": "https://images.pexels.com/photos/5041570/pexels-photo-5041570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       },
       {
         "idMeal": "7",
         "strMeal": "Pineapple Smoothie",
         "strMealThumb": "https://images.pexels.com/photos/19034780/pexels-photo-19034780/free-photo-of-pineapple-and-coconut-cocktail-with-ice-cubes-and-little-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       },
       {
         "idMeal": "8",
         "strMeal": "Coconut Water",
         "strMealThumb": "https://images.pexels.com/photos/1803516/pexels-photo-1803516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       },
       {
         "idMeal": "9",
         "strMeal": "Lemon Tea",
         "strMealThumb": "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=800"
       },
       {
         "idMeal": "10",
         "strMeal": "Hot Chocolate",
         "strMealThumb": "https://images.pexels.com/photos/9228428/pexels-photo-9228428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       }
   ]

   const [menus, setMenus] = useState([])


   useEffect(()=>{
      // fetching data from API
      const fetchData = async ()=>{
         const dataBeef = await fetch(beefURL)
         const dataSeafood = await fetch(seafoodURL)
         const dataDessert = await fetch(dessertURL)

         const dataBeefJSON = await dataBeef.json()
         const dataSeafoodJSON = await dataSeafood.json()
         const dataDessertJSON = await dataDessert.json()

         const dataMenuAll = [...dataBeefJSON.meals, ...dataSeafoodJSON.meals, ...dataDessertJSON.meals ]
         
         if(filterName==='Beef'){
            setMenus(dataBeefJSON.meals)
         }else if(filterName==='Seafood'){
            setMenus(dataSeafoodJSON.meals)
         }else if(filterName==='Dessert'){
            setMenus(dataDessertJSON.meals)
         }else{
            setMenus(dataMenuAll)
         }
      }
      fetchData()
      // cari cara kalo bisa fungsi fetch dibikin reusable
   },[filterName])

   
   const foodMenus = menus.map((menu)=>{
      return <DetailMenuCard key={menu.id} name={menu.strMeal} imgUrl={menu.strMealThumb}/>
   })

   const drinkMenus = drinks.map((drink)=>{
      return <DetailMenuCard key={drink.idMeal} name={drink.strMeal} imgUrl={drink.strMealThumb}/>
   })
   
   return(
      <>
         <div className='grid justify-items-center my-5'>
            {
               type === 'food' ? foodMenus : drinkMenus
            }
         </div>
      </>
   )
}

export default MenuCard